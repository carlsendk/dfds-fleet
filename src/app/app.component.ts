import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.scss' ],
  templateUrl: 'app.component.html'
})

export class App {
  name = 'Angular2 template';

  constructor(
    public appState: AppState) {

    }

    ngOnInit() {

    }
}
