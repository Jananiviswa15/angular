import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe',
/* pipe : true / false*/
})
export class DemopipePipe implements PipeTransform {

  transform(value:string): string {

    if(value != null ){

        return value.toUpperCase();
    }
    return value;
  }
  }
