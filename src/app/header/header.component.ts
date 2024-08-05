import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // providers: [SubscribeService] //2. WHAT TO PROVIDE
})
export class HeaderComponent {

  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService){ }

  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    this.subService.OnSubscribeClicked();
  }
}
