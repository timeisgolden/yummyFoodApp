import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { PopupComponent } from '../popup/popup.component';
var firebase = require('firebase/app');
var firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(firebase.auth());

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  iphone: boolean;
  constructor(private platform: Platform, private modalController: ModalController, private user: UserService, private route: Router, private navCtrl: NavController) {



  }

  ngOnInit() {

    if (this.platform.is('ios')) {
      console.log('Device is running Android.');
      this.iphone = true;
      // Your Android-specific code here
    } else {
      console.log('Device is not running Android.');
      this.iphone = false;
      // Your code for other platforms here
    }

    // ui.start('#firebaseui-auth-container', {
    //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
    //   signInOptions: [
    //     {
    //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //       requireDisplayName: false
    //     },
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   ],
    //   callbacks: {
    //     // signInFailure callback must be provided to handle merge conflicts which
    //     // occur when an existing credential is linked to an anonymous user.
    //     signInFailure: function (error) {
    //       // For merge conflicts, the error.code will be
    //       // 'firebaseui/anonymous-upgrade-merge-conflict'.
    //       if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
    //         return Promise.resolve();
    //       }
    //       // The credential the user tried to sign in with.
    //       var cred = error.credential;
    //       // Copy data from anonymous user to permanent user and delete anonymous
    //       // user.
    //       // ...
    //       // Finish sign-in after data is copied.
    //       return firebase.auth().signInWithCredential(cred);
    //     }
    //   }
    // });
  }

  async openPopup() {
    const modal = await this.modalController.create({
      component: PopupComponent,
      componentProps: {
        activeSegment: 'signin', // Initial active segment (signup or signin)
      },
    });
    return await modal.present();
  }

  mobile_number() {
    this.route.navigate(['./mobile-number']);
  }

  apple() {
    this.user.signInWithApple().then((result) => {


    })
  }

  google() {
    this.user.signInWithGoogle().then((result) => {



    })
    //   this.navCtrl.navigateRoot(['./home']);
  }
}
