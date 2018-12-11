import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class FrutaBuscarPipe implements PipeTransform {

  transform(value: any, nueva: string): any {
    if (nueva === undefined) {
      return value;
    } else {
      const name = nueva.toLowerCase();
      return value.filter(el => el.nombre.toLowerCase().indexOf(name) !== -1);
    }
  }

}
