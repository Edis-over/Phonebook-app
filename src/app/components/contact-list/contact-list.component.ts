import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  pageNumber: number = 1;
  constructor(private service: PhonebookService) { }

  ngOnInit(): void {
    this.service.getAllContact()
      .subscribe(data => this.contacts = data);
  }
  loadMore() {
    this.pageNumber++;
    this.service.getAllContact(this.pageNumber)
      .subscribe(data => this.contacts = [...this.contacts, ...data])
  }

}
