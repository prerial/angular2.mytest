import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/of';

import { RouterModule }   from '@angular/router';

import { MdTableModule, MdTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NgGridModule } from "angular2-grid";
import { HeroesComponent } from './heroes/hero.component';
import { GridComponent } from './grid/grid.component';
import { TableBasicExample } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    GridComponent,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgGridModule,
    MdTableModule,
    MdTooltipModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'table',
        component: TableBasicExample
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
