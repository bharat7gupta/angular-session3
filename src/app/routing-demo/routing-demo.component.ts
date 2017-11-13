import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.css']
})
export class RoutingDemoComponent implements OnInit {

  contacts$: Observable<any>;

  contactId: number;
  currentContact: any;
  showList = true;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { 
    this.contactId = +this.route.snapshot.paramMap.get("id");
    // this.route.params.subscribe((params: Params) => {
    //   this.contactId = +params["id"];

      if(this.contactId) {
        this.showList = false;
        this.currentContact = this.dataService.getContacts()
                                  .subscribe((contacts) => {
                                    this.currentContact = contacts.filter((contact) => contact.id === this.contactId)[0];
                                  });
      }
    // });
  }

  ngOnInit() {
    this.contacts$ = this.dataService.getContacts()
  }

}
