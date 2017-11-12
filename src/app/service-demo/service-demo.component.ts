import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  contacts$: Observable<any>;
  contacts: Array<any>;
  contactsFromPromise: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // gets observable from service call
    this.contacts$ = this.dataService.getContacts();

    // manually subscribe to the observable from service call
    this.dataService.getContacts()
      .subscribe((data) => {
        this.contacts = data;
      });

    // get contacts from promise returned by service
    this.dataService.getContactsPromise()
      .then((data) => {
        this.contactsFromPromise = data;
      });
  }

}
