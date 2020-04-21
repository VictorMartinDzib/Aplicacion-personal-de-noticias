import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.obtenerFavoritos();
  }

   /**
    * 
    * Guardar un objeto noticia
    */

  guardarNoticia(noticia: Article){

    const exists = this.noticias.find( noti => noti.title === noticia.title);

    if(!exists){
      this.noticias.unshift(noticia);
    }
    
    this.storage.set('favoritos', this.noticias);
    console.log("Noticia guardada");
  }

  obtenerFavoritos(){
    this.storage.get('favoritos').then((val) => {
      console.log('Elementos guardados:', val);
      this.noticias = val;
    });
  }


  eliminarNoticia(notice: Article){
    this.noticias = this.noticias.filter(noti => noti.title !== notice.title);
    this.storage.set('favoritos', this.noticias);
  }
}
