import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  //1. HOW TO PROVIDE DEPENDENCY
  constructor( private subService: SubscribeService) {}

  OnSubscribe() {
    this.subService.OnSubscribeClicked();
  }
}
