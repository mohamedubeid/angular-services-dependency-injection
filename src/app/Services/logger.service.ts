import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService{
  LogMessege(name: string, status: string) {
    console.log(`a new user with name ${name} with status ${status} is added to user list.`)
  }
}