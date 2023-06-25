import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  static isloggeIn: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

  constructor() { }

  login(email: string, password: string) {
    if(email==="admin@gmail.com" && password==="Admin"){
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
