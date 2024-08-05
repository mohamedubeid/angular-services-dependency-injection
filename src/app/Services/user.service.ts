import { User } from "../Modles/User";

export class UserService{
  users: User[] = [
    new User('ali', 'male', 'Monthly', 'Active'),
    new User('mhmd', 'male', 'Yearly', 'Inactive'),
    new User('Mery', 'Female', 'Quartrly', 'Active')
  ]

  GetAllUsers() {
    return this.users;
  }

  CreateNewUser(name: string, gender: string, subType: string, status: string) {
    const user = new User(name, gender, subType, status);
    this.users.push(user);
  }
}