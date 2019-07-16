import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): IUser[]{
    var users: IUser[] = [
      {
        id: 0,
        name: "lucas",
        cardNumber: "5",
        cardType: "Admin"
      },
      {
        id: 1,
        name: "dylan",
        cardNumber: "10",
        cardType: "Client"
      }
    ]
  
    return users;
  }
}
