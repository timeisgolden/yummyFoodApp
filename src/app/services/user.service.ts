import { Injectable, NgZone, inject } from '@angular/core';
import { BehaviorSubject, Observable, Observer, ReplaySubject } from 'rxjs';
import {
  FirebaseAuthentication,
  SignInResult, User
} from '@capacitor-firebase/authentication';
// import { Firestore, docData, } from '@angular/fire/firestore';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { DocumentData, DocumentReference, DocumentSnapshot, addDoc, collection, getDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { Auth, GoogleAuthProvider, getAuth, getRedirectResult, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Ingredients, Recipe } from './data.service';
import { Capacitor } from '@capacitor/core';
import { AlertController, LoadingController } from '@ionic/angular';
export interface Usery {
  userName: string;
  role?: string;
  uid: string;
  email: string | null;
  created?: string;
}

export interface groceryList {
  needed: Ingredients[];
  recipe: Recipe;
}



@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  users$: Observable<Usery>;

  private selectedGrocery: groceryList;
  private userSubject: BehaviorSubject<Usery | null> = new BehaviorSubject<Usery | null>(null);
  private tierSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  uid: string;
  app: FirebaseApp
  db: any;
  auth: Auth;
  private currentUserSubject = new ReplaySubject<User | null>(1);

  groceries: groceryList[] = [];
  customGroceries: any[] = [];
  constructor(private loadingController: LoadingController, private ngZone: NgZone, private router: Router, private alertController: AlertController) {
    // const auth = getAuth(); // Initialize Auth module
    FirebaseAuthentication.addListener('authStateChange', (change) => {
      this.ngZone.run(() => {
        //this.userSubject.next(change.user)
        this.currentUserSubject.next(change.user);
        const user = this.getRedirectResult();
        this.handleRedirect(user)
      });
    });



  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Hold on...",
      // duration: 3000 // Set the duration or use dismiss() to hide it programmatically
    });
    await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  async presentVerificationPopup() {
    const alert = await this.alertController.create({
      header: 'Verification Email Sent',
      message: 'Please check your email(and spam) for a verification link. After verifying, please restart the app.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Add any necessary code to restart the app here
          }
        }
      ]
    });

    await alert.present();
  }

  setUserAuto(user: Usery) {
    this.user = user;
    this.tierSubject.next(user.role);
  }


  public user: Usery;
  public person: Usery;
  setUser(user: Usery) {
    console.log(user.role)
    this.user = user;
    this.userSubject.next(user);
    this.tierSubject.next(user.role);
    if (user) {
      localStorage.setItem('user', JSON.stringify(this.user));
      JSON.parse(localStorage.getItem('user')!);
    } else {

      localStorage.setItem('user', 'null');
      JSON.parse(localStorage.getItem('user')!);
    }

    this.router.navigate(['/home']);

  }



  public get currentUser$(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  public async getRedirectResult(): Promise<SignInResult | undefined> {
    if (Capacitor.isNativePlatform()) {
      return undefined; // Return undefined on native platforms as you're handling redirect on the web
    }

    try {
      const result = await FirebaseAuthentication.getRedirectResult();
      setTimeout(() => {
      }, 4000)
      return result

    } catch (error) {
      console.error('Error getting redirect result:', error);
      throw error;
    }


  }

  getSelectedGrocery(): groceryList {
    return this.selectedGrocery;
  }

  setSelectedGrocery(grocery: groceryList) {
    this.selectedGrocery = grocery;
  }

  pullGroceries() {

    return this.groceries;
  }

  pullCustoms() {

    return this.customGroceries;
  }


  async getDocument(ref: string) {
    const { snapshot } = await FirebaseFirestore.getDocument({
      reference: ref,
    });
    return snapshot;
  };

  async getCollection(ref: string) {
    const { snapshots } = await FirebaseFirestore.getCollection({
      reference: ref,
    });
    return snapshots;
  };

  async getGroceries() {
    if (this.groceries.length == 0) {

      const ref = `users/${this.user.uid}/grocery`;
      const docu = this.getCollection(ref);
      const groceries = await docu
      groceries.forEach((doc) => {
        const grocery: groceryList = {
          needed: doc.data['needed'],
          recipe: doc.data['recipe'],
        };
        this.groceries.push(grocery);
      });
    }
  }

  async getCustomGroceries() {
    if (this.groceries.length == 0) {

      const ref = `users/${this.user.uid}/custom`;
      const docu = this.getCollection(ref);
      const groceries = await docu
      groceries.forEach((doc) => {

        this.customGroceries.push(doc.data);
      });
    }
  }


  async redirectEmail(result: any) {
    const user = await result
    if (user && user.user != null) {
      console.log(user)
      try {
        const verified = user.user.emailVerified ? true : false;
        if (!verified) {
          const email = await FirebaseAuthentication.sendEmailVerification();

          const date = new Date();
          const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
          const longFormat = date.toLocaleString('en-US', options);

          const newUser = {
            userName: user.user.displayName,
            uid: user.user.uid,
            email: user.user.email,
            created: longFormat,
            role: "free",
          };
          this.user = newUser;
          this.SetUserFire(newUser).then(() => {

            this.presentVerificationPopup();

          });

        } else {
          this.importUser(user.user.uid)
          console.log('user not new');
        }


        this.setLogged();
        //this.isLoggedIn(result.user);
        return result;
      } catch (error) {
        console.error('Error getting redirect result:', error);
        throw error;
      }

    }

  }

  async handleRedirect(result: any) {
    const user = await result
    if (user && user.user != null) {
      //this.presentLoading()
      console.log(user)
      try {
        const isNewUser = user.additionalUserInfo.isNewUser ? true : false;
        if (isNewUser) {
          const date = new Date();
          const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
          const longFormat = date.toLocaleString('en-US', options);

          const newUser = {
            userName: user.user.displayName,
            uid: user.user.uid,
            email: user.user.email,
            created: longFormat,
            role: "free",
          };
          this.user = newUser;
          this.SetUserFire(newUser).then(() => {



          });

        } else {
          this.importUser(user.user.uid)
          console.log('user not new');
        }


        this.setLogged();
        //this.isLoggedIn(result.user);
        return result;
      } catch (error) {
        console.error('Error getting redirect result:', error);
        throw error;
      }

    }

  }


  setLogged() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  handleEmail(result: any) {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    const longFormat = date.toLocaleString('en-US', options);


    const newUser = {
      userName: result.fName + result.lName,
      email: result.email,
      created: longFormat,
      role: "free",
    };

    this.SetUserFire(newUser).then(() => {



    });

  }







  async importUser(uid) {
    console.log("user:" + uid)
    const docRef = `users/${uid}`; // Corrected line
    console.log(docRef)
    const docSnap = this.getDocument(docRef);
    const user = await docSnap;
    if (user) {
      const usery = {
        userName: user.data.userName,
        uid: user.id,
        created: user.data.created,
        email: user.data.email,
        role: user.data.role,
      };
      this.setUser(usery)
    } else {
      // docSnap.data() will be undefined in this case
    }

  }

  setFireDeets(db: any, auth: any) {
    this.db = db;
    this.auth = auth;

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

  async setFav(recipe: Recipe) {
    const favRef = `users/${this.user.uid}/favorites`;
    this.setDocs(favRef, recipe)

  }

  async removeGroceryItem(recipeList: groceryList) {
    // Assuming `recipeList.recipe.id` is the desired document ID
    const docRef = `users/${this.user.uid}/grocery/${recipeList.recipe.id}`;

    // Use `setDoc` to set the data with the specified document ID
    this.deleteDocument(docRef);

    // Find the index of the recipe with the specified ID
    const indexToDelete = this.groceries.findIndex(recipe => recipe.recipe.id === this.selectedGrocery.recipe.id);

    // Check if the recipe was found
    if (indexToDelete !== -1) {
      // Recipe found, now delete it
      this.groceries.splice(indexToDelete, 1);
    }

  }

  async removeCustom(item: any) {
    // Assuming `recipeList.recipe.id` is the desired document ID
    const docRef = `users/${this.user.uid}/custom/${item.ingredient}`;

    // Use `setDoc` to set the data with the specified document ID
    this.deleteDocument(docRef);

    // Find the index of the recipe with the specified ID
    const indexToDelete = this.customGroceries.findIndex(recipe => recipe.ingredient === item.ingredient);

    // Check if the recipe was found
    if (indexToDelete !== -1) {
      // Recipe found, now delete it
      this.customGroceries.splice(indexToDelete, 1);
    }

  }

  async setGrocery(recipeList: groceryList) {
    // Assuming `recipeList.recipe.id` is the desired document ID
    const docRef = `users/${this.user.uid}/grocery/${recipeList.recipe.id}`;

    // Use `setDoc` to set the data with the specified document ID
    this.setDocs(docRef, recipeList);
    this.groceries.push(recipeList);
  }

  async setCustomGrocery(item: any) {
    // Assuming `recipeList.recipe.id` is the desired document ID
    const docRef = `users/${this.user.uid}/custom/${item.ingredient}`;

    // Use `setDoc` to set the data with the specified document ID
    this.setDocs(docRef, item);
    this.customGroceries.push(item);
  }


  async SetUserFire(user: any) {
    const userRef = `users/${user.uid}`;
    this.setDocs(userRef, user)
    this.setUser(user);
  }

  public async signInWithGoogle(): Promise<SignInResult> {
    try {
      const result: SignInResult = await FirebaseAuthentication.signInWithGoogle({
        //mode: "redirect"
      });
      const details = await result;
      this.handleRedirect(details);
      return result;
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }

  public async signInWithApple(): Promise<SignInResult> {
    try {
      const result: SignInResult = await FirebaseAuthentication.signInWithApple({
        //mode: "redirect"
      });
      const details = await result;
      console.log(details)
      this.handleRedirect(details);
      return result;
    } catch (error) {
      console.error('Apple sign-in error:', error);
      throw error;
    }
  }


  public async signIn(sign: { email: string, password: string }): Promise<SignInResult> {
    try {
      const result: SignInResult = await FirebaseAuthentication.signInWithEmailAndPassword({
        email: sign.email,
        password: sign.password
      });

      const details = await result;
      console.log(details)

      this.redirectEmail(details)
      return result;
    } catch (error) {
      console.error('Email sign-in error:', error);
      throw error;
    }
  }

  public async signUp(sign: { email: string, password: string, fName: string, lName: string }): Promise<SignInResult> {
    try {
      const result: SignInResult = await FirebaseAuthentication.createUserWithEmailAndPassword({
        email: sign.email,
        password: sign.password,
      });
      // // 2. Sign in on the web layer using the id token
      // const auth = getAuth();
      // const creds = await signInWithEmailAndPassword(auth, sign.email, sign.password);

      const date = new Date();
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      const longFormat = date.toLocaleString('en-US', options);


      this.user = {
        userName: sign.fName + "" + sign.lName,
        uid: result.user.uid,
        created: longFormat,
        email: sign.email,
        role: "free",
      };
      const email = await FirebaseAuthentication.sendEmailVerification();

      this.SetUserFire(this.user).then(() => {

        this.presentVerificationPopup();

      });

      return result;
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }

  async deleteDocument(ref) {
    await FirebaseFirestore.deleteDocument({
      reference: ref,
    });
  };

  getTier(): Observable<string | null> {
    return this.tierSubject.asObservable();
  }

  getUser2(): Observable<Usery> {
    return this.userSubject.asObservable();
  }

  getUser(): Usery {
    return this.user;
  }


  deleteAccount() {
    const ref = `users/${this.user.uid}`
    this.deleteDocument(ref)
    this.SignOut();
  }

  SignOut() {
    FirebaseAuthentication.signOut().then(() => {

      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('isLogged');
      this.router.navigate(['/onboarding']);

    });


  }


}
