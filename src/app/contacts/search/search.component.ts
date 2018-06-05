import { Component, OnInit } from '@angular/core';
import { FilterPipe} from '../../shared/filter.pipe';
import { contactService } from '../../shared/services/contacts.service';
import { Icontact } from '../../shared/interfaces/icontact';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  /* searchText: any;
  searchedContacts: any;
  contacts: any; */
  constructor(private contService:contactService) { }

  ngOnInit() {
     /* this.contService.getContacts().subscribe((dataList) => {
      this.contacts = dataList['data'];
      this.searchedContacts = this.contacts.filter((item) => {
        if(item.email.toLowerCase().includes(this.searchText))
        {
        return item; 
        }
      });
      console.log(this.searchedContacts);
    });  */
  }
    /* this.contserve.getContacts().subscribe((dataList) => {
         this.characters = dataList['data'];
       }); */
  
  
}
