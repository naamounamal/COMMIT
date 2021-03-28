import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {

  color="orange"
  constructor() { }

  ngOnInit(): void {
  }

  updateColor(){
  this.color="red";}

    readColor(value:string){
    this.color=value;
    }
   
}
