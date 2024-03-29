import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-reference',
  templateUrl: './url-reference.component.html',
  styleUrls: ['./url-reference.component.css']
})
export class UrlReferenceComponent implements OnInit {

  constructor(private router: Router) { }

  url: any;
  ngOnInit(): void {
    this.url = this.router.url;
    this.url = this.url.replace('/','');
  }

}
