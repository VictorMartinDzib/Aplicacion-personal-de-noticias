import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {

  @Output() pais: string;
  
  idiomas = [
    {
      country: 'United States',
      ab: 'us'
    },
    {
      country: 'Mexico',
      ab: 'mx'
    },
    {
      country: 'España',
      ab: 'es'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
