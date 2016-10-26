import { Component, OnInit } from '@angular/core';

import { ShipService } from './../ship.service';
import { Ship } from './../ship';



@Component({
  selector: 'active-ships',
  styleUrls: [ './_active-ships.component.scss' ],
  templateUrl: './active-ships.component.html',
  providers: [ShipService]
})

export class ActiveShips implements OnInit {

  activeShips: Ship[];

  constructor(private shipService: ShipService) {
  }

  getShips(): void{
    this.activeShips = this.shipService.getShips(true);
  }

  ngOnInit(){
    this.getShips();
  }

}

