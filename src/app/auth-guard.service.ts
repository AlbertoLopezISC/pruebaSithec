import { environment } from './../environments/environment';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private $user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  _user: Observable<any> = this.$user.asObservable(); 

  constructor(private router: Router) {

  }
  canActivate() {
    if(!environment.userLogged){
      this.router.navigate(['/iniciarSesion']);
      return false;
    }
    return true;
  }

  logIn(){
    this.$user.next(true)
  }
  logOut(){
    this.$user.next(false)
  }
}
