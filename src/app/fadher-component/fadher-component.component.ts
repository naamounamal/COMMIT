import { Component, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-fadher-component',
  templateUrl: './fadher-component.component.html',
  template: `
    < p>I’m the father component </p>
    <forma-son [dataparent]="title">      </forma-son>
`,
  styleUrls: ['./fadher-component.component.css']

})
export class FadherComponentComponent implements OnInit {
  title = 'app works !'

  constructor() { }

  ngOnInit(): void {
  }
   

}
