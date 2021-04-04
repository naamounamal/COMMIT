import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fadher-component',
  templateUrl: './fadher-component.component.html',
  
  styleUrls: ['./fadher-component.component.css']

})


export class FadherComponentComponent implements OnInit {
  color ="white"
  title = 'app works !'

  constructor() { }

  ngOnInit(): void {
  }

  update(mycolor:string)
  {
    
    this.color=mycolor;
  }
 

   

}
