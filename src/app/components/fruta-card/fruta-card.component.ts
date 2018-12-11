import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {
  _fruta: Fruta;
  _fruta2?: Fruta; // ? - Parametro opcional

  // Registrar evento de salida
  @Output() clickCompra = new EventEmitter();

  @Input('_fruta') set fruta(value: Fruta) {
    if (value) {
      this._fruta = value;
    } else {
      console.debug('fruta undefined => new Fruta()');
      this._fruta = new Fruta();
    }
  }

  get fruta(): Fruta {
    return this._fruta;
  }

  @Input('_fruta2') set fruta2(value: Fruta) {
    if (value) {
      this._fruta2 = value;
    }
  }

  get fruta2(): Fruta {
    return this._fruta2;
  }

  constructor() {
    console.trace('Constructor FrutaCardComponent');
  }

  ngOnInit() {
    console.trace('ngOnInit FrutaCardComponent');
  }

  comprar() {
    console.trace('Comprar de FrutaCardComponent');

    // Emitimos evento al componente padre y enviamos parametro 'frutaClick'
    this.clickCompra.emit( {frutaClick : this.fruta} );
  }

  compararPrecios(fruta1: Fruta, fruta2: Fruta): number {
    let resultado;
    if (fruta1.oferta && !fruta2.oferta) {
      const descuento = fruta1.precio - (fruta1.precio * fruta1.descuento) / 100;
      resultado = descuento - fruta2.precio;
    } else if (fruta2.oferta && !fruta1.oferta) {
      const descuento = fruta2.precio - (fruta2.precio * fruta2.descuento) / 100;
      resultado = fruta1.precio - descuento;
    } else if (fruta1.oferta && fruta2.oferta) {
      const descuento1 = fruta1.precio - (fruta1.precio * fruta1.descuento) / 100;
      const descuento2 = fruta2.precio - (fruta2.precio * fruta2.descuento) / 100;
      resultado = descuento1 - descuento2;
    } else {
      resultado = fruta1.precio - fruta2.precio;
    }
    return resultado;
  }

}
