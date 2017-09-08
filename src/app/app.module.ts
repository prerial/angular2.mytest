import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import {  MdTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    MdTooltipModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
 /*
      {
        path: '/',
        component: AppComponent
      },
*/
      { path: '**', redirectTo: './app' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
