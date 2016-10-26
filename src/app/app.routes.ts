import { Routes } from '@angular/router';
import { Home } from './home';
import { HomeSubPage } from './home/home-sub-page';
import { NoContent } from './no-content';

import { ActiveShips, FormerShips, ShipDetails } from './ships';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [

  { path: 'home', component: Home },
  { path: 'home/home-sub-page', component: HomeSubPage },
  { path: 'home/home-sub-page/:id', component: HomeSubPage },

  { path: 'ships', component: ActiveShips },
  { path: 'ships/details/:id', component: ShipDetails },

  { path: 'former-ships', component: FormerShips,
    children: [
      { path: '', component: ShipDetails },
      { path: 'details/:id', component: ShipDetails }]
  },

  { path: '', component: Home },
  { path: '**', component: NoContent }
];
