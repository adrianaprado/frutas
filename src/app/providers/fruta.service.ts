import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Fruta } from '../models/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas: Fruta[];
  endpoint = 'http://localhost:3000/frutas';

  constructor(public http: HttpClient) {
    console.log('FrutaService constructor');
    this.frutas = [];
  }

  getAll(): Observable<any> {
    console.trace(`FrutaService getAll ${this.endpoint}`);
    this.frutas = [];
    this.loadArrayFrutas();
    return this.http.get(this.endpoint);
  }

  getById(id: number): Observable<any> {
    console.trace('FrutaService getById');
    const uri = this.endpoint + '/' + id;
    return this.http.get(uri);
  }

  add(fruta: Fruta): Observable<any> {
    console.trace('FrutaService add');
    // let descuento;

    /*if (!fruta.oferta) {
      descuento = 0;
    } else {
      descuento = fruta.descuento;
    }*/

    const body = {
      'nombre': fruta.nombre,
      'precio': fruta.precio,
      'calorias': fruta.calorias,
      'cant': fruta.cant,
      'oferta': fruta.oferta,
      'descuento': fruta.descuento,
      'imagen': fruta.imagen,
      'colores': fruta.colores
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.endpoint, body, httpOptions);
  }

  update(fruta: Fruta): Observable<any> {
    console.trace('FrutaService update');
    const uri = this.endpoint + '/' + fruta.id;
    /*let descuento;

    if (!fruta.oferta) {
      descuento = 0;
    } else {
      descuento = fruta.descuento;
    }*/

    const body = {
      'nombre': fruta.nombre,
      'precio': fruta.precio,
      'calorias': fruta.calorias,
      'cant': fruta.cant,
      'oferta': fruta.oferta,
      'descuento': fruta.descuento,
      'imagen': fruta.imagen,
      'colores': fruta.colores
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(uri, body, httpOptions);
  }

  delete(id: number): Observable<any> {
    console.trace('FrutaService delete');
    const uri = this.endpoint + '/' + id;
    return this.http.delete(uri);
  }

  /* TODO cambiar a llamada REST */
  private loadArrayFrutas(): void {
    console.trace('loadArrayFrutas de EjercicioFrutasComponent');
    this.frutas = [];
    let f: Fruta;
    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    f.descuento = 20;
    f.imagen = 'http://padeladdict.com/wp-content/uploads/2012/12/platano2.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.imagen = 'http://www.cajanature.com/405-large_default/pera-ecologica-.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.descuento = 15;
    f.imagen = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);
  }
}
