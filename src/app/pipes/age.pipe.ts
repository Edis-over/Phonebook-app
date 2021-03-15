import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateOfBirth: string, flag?: number): any {
    if (!dateOfBirth) {
      return "";
    } else {
      let dob = new Date(dateOfBirth);
      let dateDifference = Date.now() - dob.getTime();
      let dif = new Date(dateDifference);
      let year = dif.getFullYear() - 1970;
      let month = dif.getMonth();
      let days = dif.getDay();

      let output = '';
      switch (flag) {
        case 2:
          output = `${year} years and ${month} months`;
          break;
        case 3:
          output = `${year} years, ${month} months and ${days} days `;
          break;
        case 1:
        default:
          output = `${year} years`;
      }
      return output;
    }

  }

}
