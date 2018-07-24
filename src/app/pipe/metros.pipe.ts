import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metros'
})
export class MetrosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const metros = value + ' m';
    return metros;
  }

}
