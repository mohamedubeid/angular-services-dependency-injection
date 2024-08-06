import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/Modles/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  
  selectedUser: User | undefined;
  userSer = inject(UserService);

    ngOnInit() {
      this.userSer.onUserDetailsClicked.subscribe((data: User) => {
        this.selectedUser = data;
        console.log('DATA: ', data)
      });
    }
}
