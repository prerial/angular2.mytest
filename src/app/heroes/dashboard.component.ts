import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  template: `
      <div>
         <nav>
          <a routerLink="/dashboard" class="active">Dashboard</a>
          <a routerLink="/heroes">Heroes</a>
        </nav>
      </div>
      <h2>Dashboard</h2>
  `,
  styleUrls: ['./hero.component.css']
})
export class DashboardComponent {
  constructor(
    private route: ActivatedRoute
  ) {}
}
