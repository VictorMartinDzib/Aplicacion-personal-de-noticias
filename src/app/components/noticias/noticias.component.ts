import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() articulos: Article[] = [];
  @Input() titleHead: string;
  @Input() enFavoritos: boolean=false;
  
  constructor() { }

  ngOnInit() {}

}
