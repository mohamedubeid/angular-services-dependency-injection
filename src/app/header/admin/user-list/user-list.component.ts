import { Component, Inject } from '@angular/core';
import { User } from 'src/app/Modles/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // providers: [UserService]
})
export class UserListComponent {
  constructor(private userSer: UserService) {}

  allUsers: User[] = this.userSer.GetAllUsers();

  ShowUserDetails(user: User) {
    this.userSer.OnShowDetails(user);
  }
}
