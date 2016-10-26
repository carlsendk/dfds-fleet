import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ShipService } from './../ship.service';
import { Ship } from './../ship';

@Component({
  selector: 'ship-details',
  styleUrls: ['./_ship-details.component.scss'],
  templateUrl: './ship-details.component.html',
  providers: [ShipService]
})

export class ShipDetails implements OnInit {

  ship: Ship;

  constructor(
    private shipService: ShipService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.ship = this.shipService.getShip(id);
    });
  }

  goBack() {
    this.location.back();
  }

}

