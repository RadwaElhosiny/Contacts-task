import { Component, OnInit,Input } from '@angular/core';
import { Icontact } from '../../shared/interfaces/icontact';
import { contactService } from '../../shared/services/contacts.service';
import { ContactsComponent } from '../contacts.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() contacts:any;
  constructor(private contService :contactService) {
    this.contacts=contService.getContacts();
   }

  ngOnInit() {
  }

}
