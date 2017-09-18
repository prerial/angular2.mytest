import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './heroes/dashboard.component';
import { HeroAppComponent } from './heroes/hero-app.component';
import { HeroesComponent } from './heroes/hero.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';

const routes: Routes = [
  /*
  { path: 'speakers', component: SpeakersComponent, children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] },
  */
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  {
        path: 'heroes',
        component: HeroAppComponent
      },
  /*
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroAppComponent, children: [
        { path: 'dashboard', component: DashboardComponent, outlet: 'herooutlet' },
        { path: 'heroes', component: HeroesComponent, outlet: 'herooutlet' }
      ] },
*/
      /*
            {
              path: 'material',
              component: MaterialModule
            },
            {
              path: 'grid',
              component: GridComponent
            },
            {
              path: 'table',
              component: TableBasicExample
            },
            {
              path: 'card',
              component: CardOverviewExample
            },
      */
      { path: '**', redirectTo: './app' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroService]
})
export class RoutingModule { }
