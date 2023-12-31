import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService, Recipe } from '../services/data.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  mediaFiles: File[] = [];
  mediaUrls: string[] = [];
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      ethnicity: ['', Validators.required],
      category: ['', Validators.required],
      time: [0, Validators.required],
      servings: [0, Validators.required],
      ingredients: this.fb.array([this.createIngredient()]), // Initialize with one ingredient input     
      pics: this.fb.array([]),
      directions: this.fb.array([this.createDirection()]) // Initialize with one direction input
    });




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

  deleteIngredient(index: number): void {
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

  previewMedia(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.mediaUrls.push(event.target.result as string);
    };
  }

  removeMedia(index: number) {
    this.mediaFiles.splice(index, 1);
    this.mediaUrls.splice(index, 1);
  }

  async uploadMedia() {
    this.dataService.uploadMedia(this.recipeForm, this.mediaFiles);
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
  ngOnInit() { }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formData: Recipe = this.recipeForm.value;
      formData.id = null; // Set the 'id' field to null as it will be automatically generated by Firebase Firestore
      this.dataService.createRecipe(formData); // Assuming you have a method in the DataService to add the recipe to Firestore
      this.uploadMedia();
    }
  }

}
