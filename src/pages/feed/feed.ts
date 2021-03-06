import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
   public objeto_feed = {
    titulo: "Matsui Guenta",
    data: "Setembro 20, 2017",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean ?  Whoa. This is heavy.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11 horas atrás"
   }

  public nome_usuario:string = "Matsui";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
