import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeTranslate:any;
  constructor(private router: Router) { }

  url: any;
  ngOnInit(): void {
    this.url = this.router.url;
    this.url = this.url.replace('/','');
    console.log(this.url);
  }

  randomNumber: any;
  lastNumber : any;
  randomClass(){
    // this.randomNumber = Math.floor(Math.random() * 4) + 1  ;
    while(this.randomNumber === this.lastNumber){
      this.randomNumber = Math.floor(Math.random() * 4) + 1  ;
    if (this.randomNumber === 1){
      this.randomNumber = 'first';
    }
    else if (this.randomNumber === 2){
      this.randomNumber = 'second';
    }
    else if (this.randomNumber === 3){
      this.randomNumber = 'third';
    }
    else if (this.randomNumber === 4){
      this.randomNumber = 'four';
    }
    else if (this.randomNumber === 5){
      this.randomNumber = 'five';
    }
  }
  console.log(this.randomNumber);
  this.lastNumber = this.randomNumber;
  }

// SHOW MENU 
collapseActive = false;
activeCollapse(){
  this.collapseActive = !this.collapseActive;
}

}
