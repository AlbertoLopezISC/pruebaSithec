import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  formularioLogin: FormGroup;
  users: Array<string> = ['admin', 'Alberto', 'Sithec', 'Prueba']; 
  incorrectPasswordFlag = false;
  cookies;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      email: new FormControl(this.getCookie("cookieEmail"), [Validators.required, Validators.minLength(3), validateUser(), Validators.email]),
      password: new FormControl(this.getCookie("cookiePassword"), [Validators.required, ]),
      recuerdame: new FormControl()
    });
    if(this.getCookie("cookieEmail") != '')
      this.formularioLogin.get('recuerdame').setValue(true)
  }

  iniciarSesion(){
    console.log(`${this.formularioLogin.get('recuerdame').value}` )
    if (passwords[this.formularioLogin.get('email').value] == this.formularioLogin.get('password').value){
      this.router.navigate(['/inicio']);
      if(this.formularioLogin.get('recuerdame').value){
        console.log("Recordarlo")
        this.setCookie("cookieEmail", this.formularioLogin.get('email').value, 15);
        this.setCookie("cookiePassword", this.formularioLogin.get('password').value, 15);
      } else {
        this.setCookie("cookieEmail", '', -1);
        this.setCookie("cookiePassword", '', -1);
        console.log("No Recordarlo")
      }
    } else {
      this.incorrectPasswordFlag = true
    }
  }

  private setCookie(name: string, value: string, expireDays: number){
    let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = `; path=/`;
        document.cookie = `${name}=${value}; ${expires}${cpath}`;}

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

}

export const users = ['admin@gmail.com', 'Alberto@gmail.com', 'Sithec@sithec.com.mx', 'Prueba@prueba.com']; 
export const passwords = {
  'admin@gmail.com': "admin",
  'Alberto@gmail.com': "hola123",
  'Sithec@sithec.com.mx': "qwerty",
  'Prueba@prueba.com': "p123"
}

export function validateUser(): ValidatorFn {
  return(control: AbstractControl): { [key: string]: any} => {
    const value: any = control.value;
    return users.includes(value) ? null : { notInclude: {value}}
  }
}

/*export function confirmContrasena(user: string): ValidatorFn {
  return(control: AbstractControl): { [key: string]: any} => {
    const value: any = control.value;
    return passwords[user] === value ? null : { passwordIncorrect: {value}}
  }
}*/
