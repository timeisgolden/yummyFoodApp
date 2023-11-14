import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import Swiper JS
import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css/swiper.css';


@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss'],
})
export class PictureGalleryComponent implements OnInit {

  @Input() pics: string[];

  constructor(private modalController: ModalController) {


  }

  closeGallery() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1, // Number of slides per view
      spaceBetween: 20, // Space between slides
      loop: true, // Enable loop mode
      pagination: {
        el: '.swiper-pagination', // Add pagination
        clickable: true, // Make pagination bullets clickable
      },
    });
    console.log(this.pics)
  }




}
