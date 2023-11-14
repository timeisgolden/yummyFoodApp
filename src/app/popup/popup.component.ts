import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() activeSegment: 'signup' | 'signin' = 'signin';

  signupData = {
    fName: '',
    lName: '',
    email: '',
    password: '',
  };

  signinData = {
    email: '',
    password: '',
  };

  constructor(private modalController: ModalController, private user: UserService) { }

  closePopup() {
    this.modalController.dismiss();
  }

  submitSignup() {
    // Handle sign-up logic here
    console.log('Sign Up Data:', this.signupData);
    this.user.signUp(this.signupData);
    this.signupData = {
      fName: '',
      lName: '',
      email: '',
      password: '',
    };
    this.closePopup();
  }

  submitSignin() {
    // Handle sign-in logic here
    console.log('Sign In Data:', this.signinData);
    this.user.signIn(this.signinData);
    this.signinData = {
      email: '',
      password: '',
    };
    this.closePopup();
  }
}
