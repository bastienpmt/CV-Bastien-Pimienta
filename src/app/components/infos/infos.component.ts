import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],

})
export class InfosComponent implements OnInit {

  images = ['assets/img/infos/BusinessCase1.png',
            'assets/img/infos/BusinessCase2.png',
            'assets/img/infos/BusinessCase3.png',
            'assets/img/infos/BusinessCase4.png'
          ];

  constructor() { }

  ngOnInit(): void {
  }

}
