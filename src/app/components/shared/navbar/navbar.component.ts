import { AuthGuardService } from './../../../auth-guard.service';
import { environment } from './../../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  flagLoggedUser = environment.userLogged

  constructor(private router: Router, private auth: AuthGuardService) { 
    this.$stop = new Subject<void>();
    this.auth._user.pipe(takeUntil(this.$stop)).subscribe((flag) => {
      console.log("NAVBAAAR " + flag)
      this.flagLoggedUser = flag;
    })
   }
  ngOnDestroy(): void {
    this.$stop.next();
    this.$stop.complete();
  }
  
  $stop: any;

  ngOnInit(): void {
  }


  buscarPerfilPorId(id){
    if (id !== ''){
      this.router.navigate(['/perfil', id]);
    }
  }

  cerrarSesion(){
    this.router.navigate(['/iniciarSesion']);
    this.flagLoggedUser = false;
    this.auth.logOut()
    environment.userLogged = false;
  }

}
