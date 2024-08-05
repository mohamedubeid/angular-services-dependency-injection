export class User{
  name: string;
  gnder: string;
  subType: string;
  status: string;

  constructor(name: string, gender: string, subType: string, status: string) {
    this.name = name;
    this.gnder = gender;
    this.subType = subType;
    this.status = status;
  }
}