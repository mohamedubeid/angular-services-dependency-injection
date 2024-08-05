import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  OnSubscribe() {
    let subService = new SubscribeService();
    subService.OnSubscribeClicked();
  }
}
