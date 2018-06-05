import { Component, OnInit,Input } from '@angular/core';
import { contactService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-latest-listing',
  templateUrl: './latest-listing.component.html',
  styleUrls: ['./latest-listing.component.css']
})
export class LatestListingComponent implements OnInit {
  @Input() contacts:any;
  constructor(private contService :contactService) {
    this.contacts=contService.getLatestContacts();
   }

  ngOnInit() {
  }

}
