import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstName',
    standalone: true
})
export class FirstNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const lastIndex = value.lastIndexOf(' ');
    return value.substring(0, lastIndex);
  }
}
