import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {

  //Propiedades del articulo
  @Input() notice: Article;
  @Input() imagen: string;
  @Input() fuente: string;
  @Input() titulo: string;
  @Input() contenido: string;
  @Input() url: string;
  @Input() fecha: string;
  @Input() enFavoritos: boolean;
  public icon_heart: string = 'heart-outline';
  public guardado: boolean=false;

  constructor(private iab: InAppBrowser, 
    public actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService,
    private toast: ToastController) { 
      
    }

  ngOnInit() {
    console.log("constructor");
      
      if (this.enFavoritos){
        this.icon_heart = 'heart';
        this.guardado = true;
      }else{
        this.icon_heart = 'heart-outline';
        this.guardado = false;
      }

      console.log(this.icon_heart);
  }

  saveArticle(event){
    //Cambiando estado de corazon para guardar noticia
    if(this.guardado){
      this.icon_heart = 'heart-outline';
      this.guardado = false;
      this.dataLocalService.eliminarNoticia(this.notice);
      this.showToast("Eliminado");
    }else{
      this.guardado = true;
      this.icon_heart = 'heart';
      this.dataLocalService.guardarNoticia(this.notice);
      this.showToast("Guardado");
    }
  }

  openUrl(){
    const browser = this.iab.create(this.url, '_system');
  }

  async presentShareOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Compartir',
      buttons: [{
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
          this.socialSharing.share(
            this.titulo,
            this.fuente,
            '',
            this.url
          );
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        cssClass: 'twitter',
        handler: () => {
          console.log('Twitter clicked');
        }
      }, {
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('WhatSapp clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async showToast(msg: string)
  {
    const toast = await this.toast.create({
      message: msg,
      duration: 1000,
      color: 'tertiary'
    });
    toast.present();
  }
}
