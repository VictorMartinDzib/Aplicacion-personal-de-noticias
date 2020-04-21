import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Article } from 'src/app/interfaces/noticias.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  articles: Article[] = new Array();

  slideOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public dataLocal: DataLocalService) {

  }
  ngOnInit(){
    console.log(this.dataLocal.noticias);
    
  }

  async showData(){

  }

}
