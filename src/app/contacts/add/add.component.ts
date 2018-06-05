import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { Icontact } from '../../shared/interfaces/icontact';
import { contactService } from '../../shared/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  contacts: Icontact[];
  public contact :Icontact = {};
  
  constructor( private contService:contactService , private router:Router) { }
  
  ngOnInit() {
    this.contService.getContacts().subscribe((dataList) => {
      this.contacts = dataList['data'];
      //console.log(this.filteredContacts);
    });
    
  }
  public OnAdd(form: NgForm)
  { 
    //the contact added into the array
    const value =form.value;
    this.contacts.push(value);
    console.log(this.contacts);   
    this.router.navigate(['/home']);
  }
}
