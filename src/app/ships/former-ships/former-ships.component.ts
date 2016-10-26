import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ShipService } from './../ship.service';
import { Ship } from './../ship';


@Component({
  selector: 'former-ships',
  styleUrls: ['./_former-ships.component.scss'],
  templateUrl: './former-ships.component.html',
  providers: [ShipService]
})

export class FormerShips {

  formerShips: Ship[];

  constructor(
    private shipService: ShipService,
    private location: Location) {
  }

  getFormerShips(): void {
    this.formerShips = this.shipService.getShips(false);
  }

  ngOnInit() {
    this.getFormerShips();
  }

  goBack() {
    this.location.back();
  }

}

