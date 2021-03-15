import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpad'
})
export class LpadPipe implements PipeTransform {

  transform(word: string, len?: number, divider?: string): any {
    const DEFAULT_LENGTH = 5;
    const DEFAULT_SIGN = "$";
    let output = '';
    if (!len) { len = DEFAULT_LENGTH; }
    if (!divider) { divider = DEFAULT_SIGN; }
    for (let i = 0; i < len; i++) {
      output += divider;
    }

    return output + word;

  }

}
