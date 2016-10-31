import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readFlag'
})
export class ReadFlagPipe implements PipeTransform {

  transform(value: boolean, args?: any): string {
    return value?"已读":"未读";
  }

}
