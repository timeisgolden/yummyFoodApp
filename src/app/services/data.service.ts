import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth, getAdditionalUserInfo, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, OAuthProvider, signOut, signInWithRedirect, getRedirectResult, initializeAuth, indexedDBLocalPersistence } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { FormArray, FormBuilder } from '@angular/forms';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Router } from '@angular/router';
import { UserService, Usery, groceryList } from './user.service';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';


export interface Ingredients {
  name: string;
  amount: string;
  icon: string;
  checked?: boolean;

}

export interface Directions {
  description: string;
  time: string;
}

export interface ads {
  working: boolean;
  banners: any[];
  regular: any[];
}

export interface Recipe {
  id: string;
  name: string;
  ethnicity: string;
  category: string;
  time: string;
  servings: number;
  ingredients: Ingredients[];
  pics: string[];
  directions: Directions[];
  // Add more properties as needed
}



@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private app = initializeApp(environment.firebaseConfig);
  recipes: Recipe[] = [];

  adCounter: number = 0;
  // Create a BehaviorSubject and initialize it with the initial value
  private adCounterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.adCounter);

  // Expose an observable that other parts of your application can subscribe to
  // Expose an observable for adCounter
  adCounter$: Observable<number> = this.adCounterSubject.asObservable().pipe(distinctUntilChanged()); adsInfo: ads | null = null;
  private recipeList: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  private adsList: BehaviorSubject<ads | null> = new BehaviorSubject<ads | null>(this.adsInfo);
  auth: any;
  db: any
  selectedPhoto$: Observable<any>; // Define the Photo type

  private selectedRecipe: Recipe;
  constructor(private fb: FormBuilder, private router: Router, private user: UserService) {


  }





  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  getSelectedRecipe(): Recipe {
    return this.selectedRecipe;
  }
  setAuth(auth, app) {
    this.auth = auth;
    this.db = getFirestore(app);
  }


  // Function to update the adCounter value
  incrementAdCounter() {
    console.log(this.adCounter)
    this.adCounter++;
    if (this.adCounter >= this.adsInfo.regular.length) {

      this.adCounter = 0
    }
    this.adCounterSubject.next(this.adCounter); // Notify subscribers
  }

  async addDocs(ref, data) {
    await FirebaseFirestore.addDocument({
      reference: ref,
      data: data,
    });
  };

  async setDocs(ref, data) {
    await FirebaseFirestore.setDocument({
      reference: ref,
      data: data,
      merge: true,
    });
  };



  setFire(db: any) {
    this.db = db;

  }

  async getCollection(ref: string) {
    const { snapshots } = await FirebaseFirestore.getCollection({
      reference: ref,
    });
    return snapshots;
  };

  async getDocument(ref) {
    const { snapshot } = await FirebaseFirestore.getDocument({
      reference: ref,
    });
    return snapshot;
  };

  pullAds() {

    return this.adsInfo
  }


  async getAds() {
    try {
      const ref = 'ads/ads';
      const adsData = await this.getDocument(ref);

      if (adsData) {
        const adsInfo: ads = {
          working: adsData.data['working'],
          banners: adsData.data['banners'],
          regular: adsData.data['regular'],
        };

        this.adsInfo = adsInfo;
        const banner = this.adsInfo.banners[0]
        this.adsList.next(this.adsInfo);
        console.log(this.adsInfo);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error fetching ads:', error);
    }
  }


  async getAll() {

    const ref = 'recipes'
    const recipePromise = this.getCollection(ref);
    const recipe = await recipePromise;
    // const recipeRef = collection(this.db, `recipes`);
    // const recipeSnapshot = await getDocs(recipeRef);
    recipe.forEach((doc) => {

      const recipe: Recipe = {
        id: doc.id,
        name: doc.data['name'],
        ethnicity: doc.data['ethnicity'],
        category: doc.data['category'],
        time: doc.data['time'],
        servings: doc.data['servings'],
        ingredients: doc.data['ingredients'],
        pics: doc.data['pics'],
        directions: doc.data['directions'],
      }
      this.recipes.push(recipe);

    })
    this.recipeList.next(this.recipes)
  }

  getRecipes() {

    return this.recipes;
  }

  getObservable(): Observable<Recipe[]> {
    return this.recipeList.asObservable();
  }

  adsObserve(): Observable<ads> {
    return this.adsList.asObservable();
  }

  async get(recipe: Recipe) {
    const recipeRef = `recipes/${recipe.id}`;
    const recipeSnapshot = this.getDocument(recipeRef);
    const recipex = await recipeSnapshot;
    if (recipeSnapshot) {
      const recipe: Recipe = {
        id: recipex.id,
        name: recipex.data['name'],
        ethnicity: recipex.data['ethnicity'],
        category: recipex.data['category'],
        time: recipex.data['time'],
        servings: recipex.data['servings'],
        ingredients: recipex.data['ingredients'],
        pics: recipex.data['pics'],
        directions: recipex.data['directions'],

      }
      return recipe

    }
  }

  async uploadMedia(recipeForm, mediaFiles) {
    const storage = getStorage();
    const picsFormArray = recipeForm.pics as FormArray;
    const downloadURLs = [];
    console.log(mediaFiles)
    console.log(picsFormArray)
    for (let i = 0; i < mediaFiles.length; i++) {
      const mediaFile = mediaFiles[i];
      const filePath = `media/${mediaFile.name}`;
      const picRef = ref(storage, filePath);

      try {
        // Upload the media file
        const snapshot = await uploadBytes(picRef, mediaFile);

        // Get the download URL
        const url = await getDownloadURL(picRef);

        // Push the URL to the pics FormArray
        picsFormArray.push(this.fb.control(url));
        downloadURLs.push(url);
      } catch (error) {
        // Handle any errors during the upload or URL retrieval if needed
        console.error('Error uploading media:', error);
      }
    }

    // Update the 'pics' form control with the download URLs
    recipeForm.pics = downloadURLs;
    console.log(recipeForm)
    // Call the createRecipe function after all URLs have been retrieved
    this.createRecipe(recipeForm);
  }


  async createRecipe(recipe: Recipe) {
    const recipeRef = `recipes`;
    this.addDocs(recipeRef, recipe);
  }

  async update(recipe: Recipe) {
    const recipeRef = `recipes/${recipe.id}`;
    this.setDocs(recipeRef, recipe);
  }

  async deleteDocument(ref) {
    await FirebaseFirestore.deleteDocument({
      reference: ref,
    });
  };

  async delete(recipe: Recipe) {
    const recipeRef = `recipes/${recipe.id}`;
    this.deleteDocument(recipeRef);
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {

    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if (result.user.displayName != null) {
          const user: Usery = {
            userName: result.user.displayName,

            uid: result.user.uid,
            email: result.user.email,
          };


          this.user.setUser(user);

          onAuthStateChanged(this.auth, (user) => {
            if (user) {
              this.router.navigate(['tabs']);
            }
          });
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string, firstName: string, lastName: string) {

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */

        const date = new Date(result.user.metadata.creationTime);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
        let longFormat = date.toLocaleString('en-US', options);
        if (result.user.displayName != null) {
          const user: Usery = {
            userName: result.user.displayName,
            uid: result.user.uid,
            email: result.user.email,
            created: longFormat,
            role: "free",
          };
          // this.importUser(user.uid)
          // this.router.navigate(['/tabs']);
        }



      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


}