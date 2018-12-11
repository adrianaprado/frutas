import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-frutas',
  templateUrl: './listado-frutas.component.html',
  styleUrls: ['./listado-frutas.component.scss']
})
export class ListadoFrutasComponent implements OnInit {
  frutas: Fruta[];
  frutaDetalle: Fruta;
  idFruta: number;
  todas: boolean;
  nueva: string;

  constructor(public frutaService: FrutaService, public router: Router) {
    console.trace('ListadoFrutasComponent constructor');
    this.frutas = [];
    this.todas = false;
  }

  ngOnInit() {
    console.trace('ListadoFrutasComponent ngOnInit');
    this.recargarLista();
  }

  recargarLista() {
    console.log('CrudFrutasComponent recargarLista');
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
    });
  }

  filtrar(filtro: number) {
    console.trace('TareaComponent filtrar ' + this.todas);
    if (filtro === 0) {
      this.todas = true;
    } else {
      this.todas = false;
    }
  }
}
