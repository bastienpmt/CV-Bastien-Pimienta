import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  profilInfo:boolean = false;
  languageLevel: boolean;
  showPoints: number = 0;
  constructor() { 
  }
  
  // LANGUES ANNIMATION 

  ngOnInit(): void {
  }

  completePoints(){
    if(this.showPoints === 1){
      setTimeout( () => this.f(), 500);
      setTimeout( () => this.e(), 1600);
      setTimeout( () => this.s(), 2300);
    }
  }
  countFrench: number = 0;
  countEnglish: number = 0;
  countSpanish: number = 0;
  french: any; 
  english: any;
  spanish: any;
  maxFrench: number = 5;
  maxEnglish: number = 3;
  maxSpanish: number = 3;

   f(){
    this.french= document.querySelectorAll(".français > i"); 
    this.french[this.countFrench].classList.add("starStyle");
    this.countFrench= this.countFrench+1;
    if(this.countFrench< this.maxFrench){
      setTimeout( () => this.f(), 200)}
   }
   e(){
    this.english= document.querySelectorAll(".anglais > i"); 
    this.english[this.countEnglish].classList.add("starStyle");
    this.countEnglish= this.countEnglish+1;
    if(this.countEnglish< this.maxEnglish){
      setTimeout( () => this.e(), 200)}
   }
   s(){
    this.spanish= document.querySelectorAll(".espagnol > i"); 
    this.spanish[this.countSpanish].classList.add("starStyle");
    this.countSpanish= this.countSpanish+1;
    if(this.countSpanish< this.maxSpanish){
      setTimeout( () => this.s(), 200)}
   }

}
