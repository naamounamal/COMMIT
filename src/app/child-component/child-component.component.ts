import {Component,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
 
  
    myFavoriteColor="orange"
    @Output() sendColorFromSon = new EventEmitter();     
    constructor() { }
    ngOnInit() {
    }
    sendColorToFadher(){
      this.sendColorFromSon.emit(this.myFavoriteColor);
    }
    

}
