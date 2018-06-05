import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { OneItemComponent } from './one-item/one-item.component';
import { ListingComponent } from './listing/listing.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { LatestListingComponent } from './latest-listing/latest-listing.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterPipe} from '../shared/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ContactsComponent, OneItemComponent, ListingComponent, AddComponent,
     LatestListingComponent, ContactBlockComponent, SearchComponent,FilterPipe],
  exports:[
    ContactsComponent
  ]
})

export class ContactsModule { }
