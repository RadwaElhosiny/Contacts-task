import { Component, OnInit , Input } from '@angular/core';
import { Icontact } from '../../shared/interfaces/icontact';


@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent implements OnInit {
  @Input() contact:Icontact;
  constructor() { 
  }

  ngOnInit() {
  }

}
