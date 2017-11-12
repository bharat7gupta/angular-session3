import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getContactsPromise() {
    return this.http.get("/assets/contacts.json")
                    .map((response: any) => response.json())
                    .toPromise();
  }

  getContacts() {
    return this.http.get("/assets/contacts.json")
                    .map((response: any) => response.json());
  }
  
}
