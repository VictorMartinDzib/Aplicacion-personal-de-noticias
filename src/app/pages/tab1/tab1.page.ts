import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article, RespuestaTopHeadlines } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //Variable que almacenara los articulos
  public articulos: Article[] = [];
  constructor(public noticiasDestacadas: NoticiasService) { }

  ngOnInit() {

    this.noticiasDestacadas.setPage(0);

    //Obteniendo articulos iniciales
    this.getNews();

  }

  getNews() {
    this.noticiasDestacadas.getLastNews().subscribe(
      //Respuesta de tipo RespuestaTopHeadLines
      (resp) => {
        this.articulos.push(...resp.articles);
        //console.log(this.articulos);
      }
    );
  }

  cargarMasArticulos(event) {
    // console.log(event);

    if (!event.target.disabled) {
      this.getNews();
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.articulos.length == 0) {
          event.target.disabled = true;
        } 
      }, 500);
    }
  }

}
