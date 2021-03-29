import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  one:any="";
  two:any="";
  three:any="";
  four:any="";
  five:any="";
  six:any="";
  seven:any="";

}
