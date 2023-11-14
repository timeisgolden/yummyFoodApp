import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, groceryList } from '../services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {
  groceryList: groceryList[] = [];
  customs: any[] = [];
  constructor(private route: Router, private user: UserService, public alertController: AlertController) { }

  ngOnInit() {
    this.groceryList = this.user.pullGroceries();
    this.customs = this.user.pullCustoms();
    console.log(this.customs)
  }

  grocery_details(list) {
    this.user.setSelectedGrocery(list); //
    this.route.navigate(['./grocery-details']);
  }

  async delete(item) {
    console.log(item)

    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete',

      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          },
        },
        {
          text: 'Yes',
          handler: (data) => {
            this.user.removeCustom(item);

          },
        },
      ],
    });

    await alert.present();


  }

  deleteGrocery(grocery: groceryList) {

    this.user.removeGroceryItem(grocery)
  }


  async presentInputPopup() {
    const alert = await this.alertController.create({
      header: 'I need to get',
      inputs: [
        {
          name: 'inputValue',
          type: 'text',
          placeholder: 'Eggs',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            const ingredient = {
              ingredient: data.inputValue
            }
            this.user.setCustomGrocery(ingredient)
            console.log('User input:', data.inputValue);
          },
        },
      ],
    });

    await alert.present();
  }
}
