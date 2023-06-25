import { CanActivateChildFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/login/login.service';

//@Injectable({
//   provideIn: 'root'
// })
// export class RoomGuard implements CanActivateChild {
//   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     return this.loginService.isAdmin;
//   }
// }

export const roomGuard: CanActivateChildFn = (childRoute, state) => {

  return true;
};
