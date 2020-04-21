import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ArticuloComponent } from './articulo/articulo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IdiomasComponent } from './idiomas/idiomas.component';



@NgModule({
  entryComponents: [
    IdiomasComponent
  ],
  declarations: [HeaderComponent, ArticuloComponent, NoticiasComponent, IdiomasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, ArticuloComponent, NoticiasComponent, IdiomasComponent]
})
export class ComponentsModule { }
