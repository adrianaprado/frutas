import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-comparador-frutas',
  templateUrl: './comparador-frutas.component.html',
  styleUrls: ['./comparador-frutas.component.scss']
})
export class ComparadorFrutasComponent implements OnInit {
  frutas: Fruta[];

  f1: Fruta;
  f2: Fruta;

  frutaRecibida: Fruta;
  frutasRecibidas: Fruta[];
  precioTotal: number;

  // Fruta Service es @Injectable por lo que debemos declararlo en el constructor
  // Nunca haremos new y no usarlo dentro del constructor, sino a partir del ngOnInit
  constructor( public frutaService: FrutaService ) {
    console.trace('Constructor ComparadorFrutasComponent');
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();

    this.frutasRecibidas = [];
    this.precioTotal = 0;
  }

  ngOnInit() {
    console.trace('ngOnInit ComparadorFrutasComponent');
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
      this.f1 = this.frutas[0];
      this.f2 = this.frutas[1];
    });
  }

  mostrar(fruta: Fruta) {
    console.trace('Mostrar ComparadorFrutasComponent');
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  actualizarCarro(event: Event) {
    console.debug('ComparadorFrutasComponent actualizarCarro recibimos evento del componente hijo');
    console.debug('Parametro frutaClick = %o', event['frutaClick']);

    this.frutaRecibida = event['frutaClick'];

    this.precioTotal += this.frutaRecibida.precio;

    let f: Fruta;
    f = this.frutasRecibidas.find(el => el.nombre === this.frutaRecibida.nombre);
    if (f !== undefined) {
      const i = this.frutasRecibidas.indexOf(f);
      f.cant = f.cant + 1;
      this.frutasRecibidas[i] = f;
    } else {
      this.frutasRecibidas.push(this.frutaRecibida);
    }
  }

  borrarProducto(fruta: Fruta) {
    console.debug('borrarProducto de ComparadorFrutasComponent');
    this.precioTotal = this.precioTotal - (fruta.precio * fruta.cant);
    fruta.cant = 1;
    let pos: number;
    pos = this.frutasRecibidas.indexOf(fruta);
    this.frutasRecibidas.splice(pos , 1);
  }

  anyadir(fruta: Fruta) {
    console.debug('anyadir de ComparadorFrutasComponent');
    fruta.cant += 1;
    this.precioTotal += fruta.precio;
  }

  quitar(fruta: Fruta) {
    console.debug('quitar de ComparadorFrutasComponent');
    fruta.cant -= 1;
    if (fruta.cant < 1) {
      fruta.cant = 1;
    } else {
      this.precioTotal -= fruta.precio;
    }
  }

}
