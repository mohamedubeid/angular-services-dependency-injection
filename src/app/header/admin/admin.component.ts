import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private userSer: UserService) { }

  name: string = '';
  gender: string = 'male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser() {
    this.userSer.CreateNewUser(this.name, this.gender, this.subType, this.status);
  }
}
