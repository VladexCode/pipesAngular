import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform( valor: boolean ): string {
    return ( valor ) 
        ? 'vuela'
        : 'no vuela';
}

}
