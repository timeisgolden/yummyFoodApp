import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buyappalert',
  templateUrl: './buyappalert.page.html',
  styleUrls: ['./buyappalert.page.scss'],
})
export class BuyappalertPage implements OnInit {

  constructor(private modalController: ModalController, private http: HttpClient) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
  buyAppAction() {
    this.modalController.dismiss();
    window.open("http://bit.ly/cc_ionic_yummy", '_system', 'location=no');
  }
 
  navWhatsapp() {
    let projectName = "Yummy";
    this.http.get<any>("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
      headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    }).subscribe(res => {
      window.open(res['link'], '_system', 'location=no');
    }, err => { });

    this.dismiss();
  }
}
