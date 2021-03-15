import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  constructor() { }

  ngOnInit(): void {
    this.contact = new Contact()
  }

}
