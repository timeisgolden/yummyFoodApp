import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService, Recipe } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.page.html',
  styleUrls: ['./chef.page.scss'],
})
export class ChefPage implements OnInit {
  recipeForm: FormGroup;
  isEditing: boolean = false;
  mediaFiles: File[] = [];
  mediaUrls: string[] = [];
  category: string;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      ethnicity: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
      servings: ['', Validators.required],
      ingredients: this.fb.array([this.createIngredient()]), // Initialize with one ingredient input     
      pics: this.fb.array([]),
      directions: this.fb.array([this.createDirection()]) // Initialize with one direction input
    });
  }


  populateFormWithExistingData() {
    // Fetch the existing recipe data (e.g., from a service or route data)
    const existingRecipeData: Recipe = this.recipe // Fetch the existing recipe data

    // Use patchValue to populate the top-level form controls with the existing data
    this.recipeForm.patchValue(existingRecipeData);

    // Handle the ingredients FormArray
    const ingredientsArray = this.recipeForm.get('ingredients') as FormArray;
    ingredientsArray.clear(); // Clear the existing ingredients array

    if (existingRecipeData.ingredients && existingRecipeData.ingredients.length > 0) {
      for (const ingredient of existingRecipeData.ingredients) {
        // Create a FormGroup for each ingredient
        const ingredientGroup = this.fb.group({
          name: [ingredient.name, Validators.required],
          amount: [ingredient.amount, Validators.required],
          //icon: [ingredient.icon] // You can add more validators if needed
        });

        ingredientsArray.push(ingredientGroup); // Push the FormGroup to the ingredients array
      }
    }

    // Handle the directions FormArray similarly
    const directionsArray = this.recipeForm.get('directions') as FormArray;
    directionsArray.clear(); // Clear the existing directions array

    if (existingRecipeData.directions && existingRecipeData.directions.length > 0) {
      for (const direction of existingRecipeData.directions) {
        // Create a FormGroup for each direction
        const directionGroup = this.fb.group({
          description: [direction.description, Validators.required],
          time: [direction.time, Validators.required]
        });

        directionsArray.push(directionGroup); // Push the FormGroup to the directions array
      }
    }
    // Handle the pics array
    const picsArray = this.recipeForm.get('pics') as FormArray;
    picsArray.clear(); // Clear the existing pics array

    if (existingRecipeData.pics && existingRecipeData.pics.length > 0) {
      for (const picUrl of existingRecipeData.pics) {
        // Push each pic URL to the mediaUrls array
        this.mediaUrls.push(picUrl);

        // You can also push an empty control to the pics FormArray if needed
        // picsArray.push(this.fb.control(''));
      }
    }

    // Handle mediaUrls and mediaFiles based on your application's logic
  }


  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      icon: [''] // You can add more validators if needed
    });
  }

  addIngredient(): void {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number): void {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    if (ingredients.length > 1) {
      ingredients.removeAt(index);
    }
  }

  createDirection(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      time: ['', Validators.required]
    });
  }
  removeDirection(index: number) {
    const directions = this.recipeForm.get('directions') as FormArray;
    if (directions.length > 1) {
      directions.removeAt(index);
    }

  }
  addDirection(): void {
    const directions = this.recipeForm.get('directions') as FormArray;
    directions.push(this.createDirection());
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.mediaFiles.push(files[i]);
      this.previewMedia(files[i]);
    }

  }

  isVideo(url: string): boolean {
    // Extract the file extension from the URL
    const fileExtension = url.split('.').pop().toLowerCase();

    // Define a list of video file extensions (you can add more)
    const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'wmv'];

    // Check if the file extension is in the list of video extensions
    if (videoExtensions.includes(fileExtension))
      return true;
  }

  isImage(url: string): boolean {
    // Extract the file extension from the URL
    const fileExtension = url.split('.').pop().toLowerCase();

    // Define a list of common image file extensions (you can add more)
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];

    // Check if the file extension is in the list of image extensions
    if (imageExtensions.includes(fileExtension))
      return true;
  }

  previewMedia(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.mediaUrls.push(event.target.result as string);
    };
    setTimeout(() => {
    }, 1000)

  }

  removeMedia(index: number) {
    this.mediaFiles.splice(index, 1);
    this.mediaUrls.splice(index, 1);
  }

  async uploadMedia(formData) {
    this.dataService.uploadMedia(formData, this.mediaFiles);
    // Clear mediaFiles and mediaUrls arrays after upload is complete
    this.mediaFiles = [];
    this.mediaUrls = [];
  }




  deleteDirection(index: number): void {
    const directions = this.recipeForm.get('directions') as FormArray;
    if (directions.length > 1) {
      directions.removeAt(index);
    }
  }
  ngOnInit() {


    // Access the data passed through the router and assign it to the recipe variable
    this.recipe = this.route.snapshot.data.recipe;
    if (this.recipe) {
      this.isEditing = true;


      this.populateFormWithExistingData(); // Call this to populate the form
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formData: Recipe = this.recipeForm.value;
      this.uploadMedia(formData);
      this.recipeForm.reset();
      this.router.navigate(['/home'])
    }
    else {
      // Form is not valid, mark all form controls as touched to display error messages
      this.markFormGroupTouched(this.recipeForm);
    }


  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}

