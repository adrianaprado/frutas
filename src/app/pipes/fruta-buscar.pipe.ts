import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class FrutaBuscarPipe implements PipeTransform {

  transform(value: any, nombreBuscar: string): any {
    if (nombreBuscar === undefined) {
      return value;
    } else {
      const name = nombreBuscar.toLowerCase();
      return value.filter(el => el.nombre.toLowerCase().indexOf(name) !== -1);
    }
  }

}
