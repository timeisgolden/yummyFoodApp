import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  myForm: FormGroup;
  constructor(private navCtrl: NavController, private user: UserService, private alertController: AlertController, private data: DataService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      full_name: ['Samantha Smith'],
      email_address: ['samsmith123@mail.com'],
      message: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.myForm.value);
    const ref = `requests`;
    this.data.addDocs(ref, this.myForm.value)

  }

  async delete() {
    const alert = await this.alertController.create({
      header: 'Delete Account',
      message: '<br>Are you sure you want to delete your account?',
      mode: 'md',
      cssClass: 'animate__animated animate__zoomIn',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.user.deleteAccount();
            // this.navCtrl.navigateRoot(['./onboarding']);
          }
        }
      ]
    });

    await alert.present();
  }



  ngOnInit() {
  }

}
