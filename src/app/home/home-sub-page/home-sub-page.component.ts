import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'home-sub-page',
  styleUrls: [ './home-sub-page.component.scss' ],
  templateUrl: './home-sub-page.component.html'
})
export class HomeSubPage {
  private id: number;
  private param1: string;
  private param2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id']; 
      
    });

    this.route.queryParams.forEach((params: Params) => {
      this.param1 = params['param1']; 
      this.param2 = params['param2']; 
    });
  }
}
