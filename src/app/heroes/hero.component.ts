import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-heroes',
//  templateUrl: './hero.component.html',
  template: `
      <div>
         <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/heroes" class="active">Heroes</a>
        </nav>
      </div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span><span class="content">{{hero.name}}</span>
        </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
`,
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  private heroService: HeroService
  ) { }
  title = 'Tour of Heroes';
  heroes = [];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//    this.heroes = this.heroService.getHeroes();
  }

}
