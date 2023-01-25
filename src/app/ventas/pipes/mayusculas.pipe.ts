import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform( valor: string, enMayusculas: boolean = true ): string {

    // if ( enMayusculas ) {
    //     return valor.toUpperCase();
    // } else {
    //     return valor.toLocaleLowerCase();
    // }
    return ( enMayusculas ) 
        ? valor.toUpperCase() 
        : valor.toLocaleLowerCase();
}

}
