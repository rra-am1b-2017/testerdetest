import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private alertCtrl: AlertController;
  private test: string;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
    this.alertCtrl = alerCtrl;
    this.test ="";
  }

  doAlert(tekst:string ) {
    var alert = this.alertCtrl.create({
      title: 'Hallo Allemaal!' + tekst,
      message: 'We gaan met zijn allen naar het Circus',
      buttons: ['Dat is goed']
    });
    this.test = "De groeten van Arjan de Ruijter";
    alert.present()
  }

}
