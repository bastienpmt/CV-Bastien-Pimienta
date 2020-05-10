import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  displayContent1: boolean =false;
  displayContent2: boolean =false;
  displayContent3: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  active(number){
    switch(number){
      case 1: this.displayContent1 = !this.displayContent1;
      this.displayContent2 = false;
      this.displayContent3 = false;
      break;
      case 2: this.displayContent2 = !this.displayContent2;
      this.displayContent1 = false;
      this.displayContent3 = false;
      break;
      case 3: this.displayContent3 = !this.displayContent3;
      this.displayContent1 = false;
      this.displayContent2 =false;
      break;
    }
  }

}
