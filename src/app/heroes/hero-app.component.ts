import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app-heroes',
  template: `
    <div class="myheroes">
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
      </nav>
      <nav>
        <a [routerLink]="['dashboard']">Child One</a>
        <a [routerLink]="['heroes']">Child Two</a>
      </nav>
     </div>
    <div class="app-content" style="border:3px solid blue">
      <router-outlet></router-outlet>
    </div>
    
  `,
  styleUrls: ['./hero.component.css']
})

export class HeroAppComponent {
  title = 'Tour of Heroes';
  private id: any;
  sub:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private ngOnInit() {
    debugger;
 //   this.router.navigate(['/dashboard', {outlets: {'herooutlet': [1]}}]);
//    this.sub = this.route.params.subscribe(params => {
//      this.id = +params['id']; // (+) converts string 'id' to a number
//    });
  }
  showDashboard(id) {
 //   this.router.navigate(['/dashboard', {outlets: {'herooutlet': [id]}}]);
  }

  private ngOnDestroy() {
 //   this.sub.unsubscribe();
  }
}
