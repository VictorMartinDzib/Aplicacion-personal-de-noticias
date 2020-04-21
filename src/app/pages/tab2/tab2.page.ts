import { Component, OnInit } from '@angular/core';
import { Article, RespuestaTopHeadlines } from '../../interfaces/noticias.interface';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //Arreglo para contenido de los segmentos
  categorias = [
    {
      name: 'Negocios',
      icon: 'business-outline',
      value: 'business'
    },
    {
      name: 'Entretenimiento',
      icon: 'game-controller-outline',
      value: 'entertainment'
    },
    {
      name: 'General',
      icon: 'reorder-four-outline',
      value: 'general'
    },
    {
      name: 'Salud',
      icon: 'heart-circle-outline',
      value: 'health'
    },
    {
      name: 'Ciencia',
      icon: 'flask-outline',
      value: 'science'
    },
    {
      name: 'Deportes',
      icon: 'american-football-outline',
      value: 'sports'
    },
    {
      name: 'Tecnología',
      icon: 'cloud-outline',
      value: 'technology'
    }
  ];

  public articulos: Article[] = [];
  categoria: string = "Business";
  nameCategoria: string = "Negocios";

  constructor(public noticiasDestacadas: NoticiasService) { }

  ngOnInit() {
    //Inicializando
    this.noticiasDestacadas.setPage(0);
    this.setCategoria();
  }

  //Obtener categoria actual
  onSegementClick(event) {

    //Reestablecemos la pagina como la primera:
    this.noticiasDestacadas.setPage(0);

    //Obteniendo el indice en el arreglo
    let indice = +event.target.value;

    //Validar que el usuario no pulsa el mismo boton
    if (!(this.categorias[indice].value == this.categoria)) {
      this.categoria = this.categorias[indice].value;
      this.nameCategoria = this.categorias[indice].name;
      this.articulos = [];

      this.setCategoria();
    }

  }
  //Realizar peticion por categoria
  setCategoria() {

    this.noticiasDestacadas.getLasNewsByCategory(this.categoria).subscribe(
      //Respuesta de tipo RespuestaTopHeadLines
      (resp) => {
        this.articulos.push(...resp.articles);
        console.log(this.articulos);
      }
    );
  }

  cargarMasArticulos(event) {
    
    // console.log(event);
    this.setCategoria();
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
