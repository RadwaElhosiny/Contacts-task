import { Component, OnInit, Injectable } from '@angular/core';
import { contactService } from '../shared/services/contacts.service';
import { Icontact } from '../shared/interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
@Injectable()
export class ContactsComponent implements OnInit {

  latest: Icontact[];
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(private contactservice: contactService) {

  }

  ngOnInit() {
    this.contactservice.getLatestContacts().subscribe((dataList) => {
      this.latest = dataList['data'];
    });
  }
  
  getSliced(latest:Icontact[])
  {
    let result:Icontact[];
    if(latest)
    {
      result=latest.slice(0,2);
    }
    return result;
  }


}
