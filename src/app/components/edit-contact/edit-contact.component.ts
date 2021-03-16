import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private service: PhonebookService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.service.getContactDetails(params['id'])
        .subscribe(contact => {
          this.contactForm.setValue({ ...contact })
        })
    })
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,13}$/)]),
      city: new FormControl('', [Validators.minLength(3)]),
      state: new FormControl(),
      country: new FormControl(),
      picture: new FormControl("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"),
      dateOfBirth: new FormControl('', [Validators.required])
    });
  }
  saveChanges() {
    this.service.updateContact(this.contactForm.value)
      .subscribe((contact) => {
        this.router.navigate(["/contact-details", contact.id])
      })
  }
}
