import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private data: DataService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the user is in local storage
    const value = localStorage.getItem('isLoggedIn');
    if (value == "true") {
      const data = this.data.getRecipes();
      if (data && data.length > 0) {
        // Retrieve the JSON string from local storage
        // Run this block if 'data' is defined and not empty
        // Place your code here
      } else {
        // 'data' is either undefined or an empty array
        // You can decide what to do in this case
        // For example, you might want to call this.data.getAll() here
        this.data.getAll();
      }
      //this.user.getGroceries();

      const jsonString = localStorage.getItem('user'); // Replace 'yourLocalStorageKey' with the key you used for storing the data.
      console.log(jsonString);
      // Check if the JSON string is not null or undefined
      if (jsonString) {
        try {
          // Parse the JSON string into a JavaScript object
          const userObject = JSON.parse(jsonString);
          this.user.setUserAuto(userObject)
          this.user.getGroceries();
          this.user.getCustomGroceries();
          this.data.getAds();
          // Now you can access the properties of the object
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else {
        console.log('No data found in local storage with the specified key.');
      }
      return true;
    } else {
      console.log("guard blocking")
      // User not found in local storage, navigate to login
      this.router.navigate(['/onboarding']);
      return false;
    }
  }
}