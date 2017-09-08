/**
 * Created by U160964 on 9/8/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-heroes',
//  templateUrl: './hero.component.html',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
