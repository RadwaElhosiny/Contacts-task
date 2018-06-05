import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './contacts/add/add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { contactService } from './shared/services/contacts.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:ContactsComponent},
      {path:"home",component:ContactsComponent},
      {path:"add",component:AddComponent}
    ])
  
  ],
  providers: [contactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
