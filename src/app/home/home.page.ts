import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService, Recipe } from '../services/data.service';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  type_of_food: string = "Breakfast";
  adsOn: boolean = true;
  showToolbar = false;
  viewType: string
  bannerImages: string[] = [];
  currentBannerImageIndex: number = 0;
  recipes: any;
  totalRecipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  ethnicities: string[];
  searchQuery: string = '';
  private recipeSub: Subscription;
  private adsSub: Subscription;
  blurTimer: NodeJS.Timeout;
  constructor(private data: DataService, private route: Router, @Inject(APP_CONFIG) public config: AppConfig, private statusBar: StatusBar, private user: UserService) {
    //this.user.getGroceries();


    console.log(this.filteredRecipes)
    this.recipeSub = this.data.getObservable().subscribe((recipes) => {
      this.totalRecipes = recipes;
      this.recipes = this.separateRecipesByCategory(recipes);

      if (this.recipes.length > 0)
        this.getUniqueEthnicity(recipes);

    })

    this.adsSub = this.data.adsObserve().subscribe((ads) => {
      if (ads != null) {
        console.log(ads)
        this.bannerImages = ads.banners;
        console.log(this.bannerImages[0].link)
      }

    })
  }

  async open(link) {

    await Browser.open({ url: link });
  };

  get currentBannerImageUrl() {
    this.currentBannerImageIndex++
    var index = this.currentBannerImageIndex - 1;
    if (index >= this.bannerImages.length) {
      this.currentBannerImageIndex = 0;
      index = 0;

    }
    console.log(index)
    // Calculate the current banner image URL based on the index
    return index;
  }

  cycleBannerImage() {
    this.currentBannerImageIndex++; // Increment the index
    if (this.currentBannerImageIndex >= this.bannerImages.length) {
      // If the index exceeds the array length, loop back to the first image
      this.currentBannerImageIndex = 0;
    }
    console.log(this.currentBannerImageIndex);
    return this.currentBannerImageIndex
  }

  incrementAds() {
    console.log("incrementAds")
    this.data.incrementAdCounter()
  }

  separateRecipesByCategory(recipes: Recipe[]): { [key: string]: Recipe[] } {
    return recipes.reduce((result, recipe) => {
      // Get the category name from the current recipe
      const categoryName = recipe.category;

      // Initialize an array for the category if it doesn't exist
      if (!result[categoryName]) {
        result[categoryName] = [];
      }

      // Push the recipe into the appropriate category array
      result[categoryName].push(recipe);

      return result;
    }, {});
  }

  getUniqueEthnicity(recipes) {
    const categoriesSet = new Set<string>(); // Use a Set to store unique categories

    recipes.forEach(recipe => {
      categoriesSet.add(recipe.ethnicity);
    });

    this.ethnicities = Array.from(categoriesSet);
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }

  ngOnInit() {
    const person = this.user.getUser();
    if (person.role == "Paid")
      this.adsOn = false;

    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('var(--bg-white)');

  }

  handleSearchBarBlur() {
    // Delay the execution of the clear() function by 300 milliseconds (adjust the delay as needed)
    this.blurTimer = setTimeout(() => {
      this.clear();
    }, 100);
  }

  filterRecipes() {
    if (this.searchQuery != '')
      this.filteredRecipes = this.totalRecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
  }

  clear() {
    // Clear the search term
    this.searchQuery = '';
    this.filteredRecipes = [];


  }
  filter() {
    this.route.navigate(['./filter']);
  }
  search() {
    this.route.navigate(['./search']);
  }
  notification() {
    this.route.navigate(['./notification']);
  }
  item_info(recipe: Recipe) {
    this.data.setSelectedRecipe(recipe);
    this.route.navigate(['./item-info']);
  }

  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 200;
    }
  }


  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }
}
