import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private service: PhonebookService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData['id'])
        .subscribe(data => this.contact = data)
    })
  }

  deleteContact() {
    if (!confirm('Are you sure?')) {
      return;
    }
    this.service.deleteContact(this.contact.id)
      .subscribe(() => this.router.navigate(['/contact-list']))
  }


}
