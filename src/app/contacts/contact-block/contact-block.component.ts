import { Component, OnInit, Input } from '@angular/core';
import { contactService } from '../../shared/services/contacts.service';
import { Icontact } from '../../shared/interfaces/icontact';

@Component({
  selector: 'app-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.css']
})
export class ContactBlockComponent implements OnInit {
  @Input() letter: string;
  contacts: Icontact[];
  filteredContacts: Icontact[];

  constructor(private contService: contactService) {

  }

  ngOnInit() {
    //console.log(this.contacts);
    this.contService.getContacts().subscribe((dataList) => {
      this.contacts = dataList['data'];
      this.filteredContacts = this.contacts.filter((item) => {
        if (item.email && item.email.charAt(0).toLowerCase() == this.letter.charAt(0).toLowerCase()) {
          return item;
        }
      });
    });
  }
}
