import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }
selector1 : any;
selector2 : any;
varX: number;
varY: number;
varRotate: any;
balance: boolean;
screenHeight: any = screen.height;
screenWidth: any = screen.width;
signX: any;
signY: any;
hideAll: boolean;
progress1: boolean;
progress2: boolean;

ngOnInit(): void {
    this.selector1 = document.querySelectorAll("#container1 > span");
    this.selector2 = document.querySelectorAll("#container2 > span");


    // CONTAINER 1
    setTimeout(() => this.progress1 = true, 300);
    setTimeout(() => this.progress1 = false, 2100);
     for (let entry of this.selector1) {
      // console.log(entry); 
      this.varX= Math.floor(Math.random() * (this.screenWidth - (this.screenWidth +2000 )) + this.screenWidth +2000);
      this.varY= Math.floor(Math.random() * (this.screenHeight - (this.screenHeight +2000 )) + this.screenHeight +2000);
      this.varRotate= Math.floor(Math.random() * 800);
      this.signX= Math.floor(Math.random() * (1 - (-1)));
      this.signY= Math.floor(Math.random() * (1 - (-1)));
      if(this.signX === 0){
        this.varX= this.varX * (-1);
      }
      if(this.signY === 0){
        this.varY= this.varY * (-1);
      }
      entry.animate([
          // keyframes
      { transform: 'translate(' + this.varX +'px, ' + this.varY +'px) rotate(' + this.varRotate + 'deg) '},
      { transform: 'translate(0)' }
    ], {
      duration: 2500,
      easing: 'cubic-bezier(.76,1.03,.87,.7)',
      direction: 'reverse',
      fill: 'forwards',
      delay: 2000,
    }); 
    }

    // CONTAINER 2
    for (let entry of this.selector2) {
      // console.log(entry); 
      this.varX= Math.floor(Math.random() * (this.screenWidth - (this.screenWidth +2000 )) + this.screenWidth +2000);
      this.varY= Math.floor(Math.random() * (this.screenHeight - (this.screenHeight +2000 )) + this.screenHeight +2000);
      this.varRotate= Math.floor(Math.random() * 800);
      this.signX= Math.floor(Math.random() * (1 - (-1)));
      this.signY= Math.floor(Math.random() * (1 - (-1)));
      if(this.signX === 0){
        this.varX= this.varX * (-1);
      }
      if(this.signY === 0){
        this.varY= this.varY * (-1);
      }

    setTimeout(() => this.balance = true, 2200);
    setTimeout(() => this.progress2 = true, 4000);
    setTimeout(() => this.progress2 = false, 5800);
      entry.animate([
          // keyframes
      { transform: 'translate(' + this.varX +'px, ' + this.varY +'px) rotate(' + this.varRotate + 'deg)'},
      { transform: 'translate(0)'},

    ], {
      duration: 2500,
      easing: 'cubic-bezier(.57,1.04,.88,.99)',
      fill: 'forwards',
      delay: 1500,
    }); 
    setTimeout(() => this.hideAll = true, 5700);
    setTimeout(() => this.router.navigate(['/home']), 6700);
    }
 }

}
