import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  baseUrl = "http://localhost:4300/contacts/";
  constructor(private http: HttpClient) { }

  getContactDetails(id: number): Observable<Contact> {
    return this.http.get(this.baseUrl + id).map(data => data as Contact);
  }
  addNewContact(contact: Contact): Observable<Contact> {
    return this.http.post(this.baseUrl, contact).map(data => data as Contact);
  }
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(this.baseUrl + contact.id, contact).map(data => data as Contact);
  }
  deleteContact(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
  getAllContact(pageNumber: number = 1): Observable<Contact[]> {
    let params = {
      '_page': "" + pageNumber
    }
    return this.http.get(this.baseUrl, { params }).map(resp => resp as Contact[]);
  }
}
