import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oferta'
})
export class FrutasPipe implements PipeTransform {

  transform(value: any, oferta: boolean): any {
    if (oferta) {
      return value.filter(el => el.oferta === true);
    } else {
      return value;
    }
  }

}
