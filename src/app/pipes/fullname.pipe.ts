import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    if (!contact) {
      return "";
    } else {
      let title = contact.gender === "male" ? "Mr." : "Ms."
      return `${title} ${contact.firstname} ${contact.lastname}`
    }
  }

}
