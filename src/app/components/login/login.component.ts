import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/providers/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  mensaje: string;

  constructor(private loginService: LoginService, private router: Router) {
    console.trace('LoginComponent constructor');
    this.crearFormulario();
    this.mensaje = '';
  }

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  }

  private crearFormulario() {
    this.formulario = new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ])
    });
  }

  enviar() {
    console.trace('Enviar');
    // TODO llamar al servicio de login
    const nombre = this.formulario.controls.nombre.value;
    const password = this.formulario.controls.password.value;

    console.debug(`nombre = ${nombre}, password = ${password}`);

    const u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    // Llamar al servicio
    if (this.loginService.login(u)) {
      this.router.navigate(['privado']);
    } else {
      this.mensaje = 'Credenciales no válidas. Por favor, inténtalo de nuevo';
    }
  }

}
