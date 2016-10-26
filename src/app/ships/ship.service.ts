import { Injectable } from '@angular/core';
import { Ship } from './ship';

const SHIPS: Ship[] = [
  { id: 1, name: 'Britannia Seaways', built: 2000, tonnage: 24196, active: true },
  { id: 2, name: 'Cimbria Seaways', built: 1986, tonnage: 12189, active: true },
  { id: 3, name: 'Crown Seaways', built: 1994, tonnage: 35495, active: true },
  { id: 4, name: 'Sirena Seaways', built: 2002, tonnage: 22382, active: true },
  { id: 5, name: 'Delft Seaways', built: 2006, tonnage: 35923, active: true },
  { id: 6, name: 'MS Skipper Clement', built: 1964, tonnage: 2964, active: false },
  { id: 7, name: 'MS Akershus', built: 1965, tonnage: 5012, active: false },
  { id: 8, name: 'MS Winston Churchill', built: 1967, tonnage: 8657, active: false },
  { id: 9, name: 'MS Kong Olav V', built: 1968, tonnage: 7965, active: false },
  { id: 10, name: 'MS Prinsesse Margrethe', built: 1968, tonnage: 7965, active: false },
];

export class ShipService {

  getShips(active: boolean): Ship[] {
    return SHIPS.filter(ship => ship.active === active);
  }

  getShip(id: number) {
    return SHIPS.find(ship => ship.id === id);
  }

}
