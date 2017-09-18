import "@angular/material/prebuilt-themes/indigo-pink.css";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { MdCardModule, MdTableModule, MdTooltipModule, MdToolbarModule } from '@angular/material';
//import { NgGridModule } from "angular2-grid";

import { AppComponent } from './app.component';
import { RoutingModule }   from './app-routing.module';

import { HeroesModule } from './heroes/heroes.module';

import { HeroAppComponent } from './heroes/hero-app.component';

//import { MaterialModule } from './material/app.module';

//import { GridComponent } from './grid/grid.component';
//import { TableBasicExample } from './table/table.component';
//import { CardOverviewExample } from './material/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroAppComponent,
//    MaterialComponent,
//    GridComponent,
//    CardOverviewExample,
//    TableBasicExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
//    NgGridModule,
//    MaterialModule,
    MdToolbarModule,
//    MdCardModule,
//    MdTableModule,
//    MdTooltipModule,
    RoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
