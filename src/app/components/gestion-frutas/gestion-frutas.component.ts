import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruta } from 'src/app/models/fruta';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-gestion-frutas',
  templateUrl: './gestion-frutas.component.html',
  styleUrls: ['./gestion-frutas.component.scss']
})
export class GestionFrutasComponent implements OnInit {
  id: number;
  frutaDetalle: Fruta;
  formulario: FormGroup;
  colores: FormArray;
  urlPattern: string;

  mensaje: string;

  constructor(private route: ActivatedRoute, public frutaService: FrutaService, private router: Router) {
    console.trace('GestionFrutasComponent constructor');
    this.mensaje = '';
    this.id = 0;
    /* Patron para que la url de imagen empiece por http(s) y acabe por jpg, png o jpeg */
    this.urlPattern = '^(http(s?)):\/\/.+\.(jpg|png|jpeg)$';

    this.formulario = new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]),
      precio: new FormControl(
        0, // Con valor inicial
        [ // Validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(9999)
        ]),
      calorias: new FormControl(
        0,
          [
            Validators.required,
            Validators.min(5),
            Validators.max(99999)
          ]),
      cantidad: new FormControl(
        1,
          [
            Validators.required,
            Validators.min(1),
            Validators.max(99)
          ]),
      oferta: new FormControl(
        false,
        [
          Validators.required
        ]),
      descuento: new FormControl(
        5,
        [
          Validators.required,
          Validators.min(5),
          Validators.max(90)
        ]),
      imagen: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(this.urlPattern)
        ]),
      colores: new FormArray([this.crearColorFormGroup('')],
        Validators.minLength(1))
    });

    console.trace('Formulario %o', this.formulario);
  }

  ngOnInit() {
    console.trace('GestionFrutasComponent ngOnInit');
    this.frutaDetalle = new Fruta();
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
      if (this.id > 0) {
        this.frutaService.getById(this.id).subscribe(data => {
          console.debug('Data: %o', data);
          this.frutaDetalle = data as Fruta;
          this.cargarFormulario();
        });
      }
   });
  }

  cargarFormulario() {
    console.trace('GestionFrutasComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(this.frutaDetalle.nombre);
    this.formulario.controls.precio.setValue(this.frutaDetalle.precio);
    this.formulario.controls.calorias.setValue(this.frutaDetalle.calorias);
    this.formulario.controls.cantidad.setValue(this.frutaDetalle.cant);
    this.formulario.controls.descuento.setValue(this.frutaDetalle.descuento);
    this.formulario.controls.oferta.setValue(this.frutaDetalle.oferta);
    this.formulario.controls.imagen.setValue(this.frutaDetalle.imagen);

    const arrayColores = new FormArray([]) as FormArray;

    this.frutaDetalle.colores.forEach(c => {
      arrayColores.push(this.crearColorFormGroup(c));
    });

    this.formulario.setControl('colores' , arrayColores);
  }

  crearColorFormGroup(nombre: string): FormGroup {
    console.trace('GestionFrutasComponent crearColorFormGroup');
    return new FormGroup({
      color: new FormControl(
        nombre,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ])
    });
  }

  nuevoColor(nombre: string) {
    console.trace('GestionFrutasComponent nuevoColor');
    const arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup(nombre));
  }

  enviarFruta(id: number) {
    console.trace('GestionFrutasComponent enviar');
    const fruta = new Fruta();
    fruta.nombre =  this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.cant = this.formulario.controls.cantidad.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.oferta = this.formulario.controls.oferta.value;

    this.formulario.get('colores').controls.forEach(color => {
      const colorFormControl = color.controls.color.value;
      fruta.colores.push(colorFormControl);
    });

    /** Si es menor que 0 se esta creando una fruta nueva */
    if (id < 0) {
      this.frutaService.add(fruta).subscribe(data => {
        console.debug(data);
        this.formulario.controls.nombre.setValue('');
        this.formulario.controls.precio.setValue(0);
        this.formulario.controls.calorias.setValue(0);
        this.formulario.controls.cantidad.setValue(1);
        this.formulario.controls.oferta.setValue(false);
        this.formulario.controls.descuento.setValue(10);
        this.formulario.controls.imagen.setValue('');
        this.formulario.controls.colores.setValue([{color: ''}]);
        this.mensaje = 'Fruta creada correctamente';
        // this.router.navigate(['backoffice']);
      });
    /** Si id > 0 la fruta existe y se esta actualizando */
    } else {
      fruta.id = id;
      this.frutaService.update(fruta).subscribe(data => {
        console.debug(data);
        this.mensaje = 'Fruta modificada correctamente';
      });
    }
  }

}
