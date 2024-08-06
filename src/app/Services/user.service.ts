import { Injectable } from "@angular/core";
import { User } from "../Modles/User";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root'
})  //used in side service that inject(use) another service.
export class UserService{
  users: User[] = [
    new User('ali', 'male', 'Monthly', 'Active'),
    new User('mhmd', 'male', 'Yearly', 'Inactive'),
    new User('Mery', 'Female', 'Quartrly', 'Active')
  ];

  constructor(private logger: LoggerService) {}

  GetAllUsers() {
    return this.users;
  }

  CreateNewUser(name: string, gender: string, subType: string, status: string) {
    const user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logger.LogMessege(name, status);

  }
}