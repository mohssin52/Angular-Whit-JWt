import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AcountService } from '../services/acount.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardsGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private accountService: AcountService,
    private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if(!this.tokenService.loggedIn()){

  this.router.navigateByUrl('/login')
  this.tokenService.remove
this.accountService.changeAuthStatus(false)
return false
}



    return true;
  }



}
