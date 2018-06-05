import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icontact } from '../interfaces/icontact';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class contactService {
    contacts = new Subject<Icontact[]>();
    contactsFile: string = "../../../assets/contacts.json";
    latestContactsFile: string = "../../../assets/recent-contact.json"

    constructor(private http: HttpClient) {
    }
    getContacts() {
        return this.http.get(this.contactsFile)
    }
    getLatestContacts() {
        return this.http.get(this.latestContactsFile);
    }
    public add(contact: Icontact) {
    }
}