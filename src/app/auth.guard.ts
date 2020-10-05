import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('access_token');
    if (typeof token !== 'string') {
      return this.defaultNavigate();
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
      return this.defaultNavigate();
    }
    return this.router.navigate(['/home']);
  }

  defaultNavigate(): Promise<boolean> {
    return this.router.navigate(['/login']);
  }

}
