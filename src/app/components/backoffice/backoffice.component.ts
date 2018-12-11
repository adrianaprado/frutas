import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Router } from '@angular/router';
import { Fruta } from 'src/app/models/fruta';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  tableWidget: any;
  frutas: Fruta[];
  frutaDetalle: Fruta;
  idFruta: number;
  mensaje: string;
  todas: boolean;

  constructor(public frutaService: FrutaService, public router: Router) {
    console.trace('BackofficeComponent constructor');
    this.frutas = [];
    this.mensaje = '';
    this.todas = false;
  }

  ngOnInit() {
    console.trace('ListadoFrutasComponent ngOnInit');
    this.recargarLista();
  }

  recargarLista() {
    console.log('BackofficeComponent recargarLista');
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
    });
  }

  eliminarFruta(id: number) {
    console.trace('BackofficeComponent eliminarFruta');
    this.frutaService.delete(id).subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.recargarLista();
      this.mensaje = 'Fruta eliminada correctamente';
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
