import { Component, OnInit, Input, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IdiomasComponent } from '../idiomas/idiomas.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  

  
  constructor(public popoverController: PopoverController) { }
  

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: IdiomasComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
