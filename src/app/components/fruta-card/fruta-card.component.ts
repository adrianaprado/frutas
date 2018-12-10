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

}
