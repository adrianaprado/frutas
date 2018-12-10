import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

const USUARIO_NOMBRE = 'admin';
const USUARIO_PASSWORD = '12345';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usuario: Usuario;

  constructor() {
    console.trace('LoginService constructor');
    this.usuario = undefined;
  }

  isLogged(): boolean {
    console.trace('LoginService isLogged');
    if (this.usuario) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    console.trace('LoginService logout');
    this.usuario = undefined;
  }

  login(u: Usuario): boolean {
    console.trace('LoginService login %o', u);
    if (u && u.nombre === USUARIO_NOMBRE && u.password === USUARIO_PASSWORD) {
      this.usuario = u;
      console.debug('Usuario loggeado');
      return true;
    } else {
      this.usuario = undefined;
      console.warn('Usuario no es correcto');
      return false;
    }
  }
}
