/**
 * Created by U160964 on 9/8/2017.
 */
import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-heroes',
//  templateUrl: './hero.component.html',
  template: `<div>
  <label>Name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>{{hero.name}}
`,
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
