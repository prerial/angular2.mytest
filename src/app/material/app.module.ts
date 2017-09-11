import "@angular/material/prebuilt-themes/indigo-pink.css";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { MdCardModule, MdTableModule, MdTooltipModule } from '@angular/material';
import { NgGridModule } from "angular2-grid";

import { MaterialComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { TableBasicExample } from './table/table.component';
import { CardOverviewExample } from './card/card.component';

@NgModule({
  declarations: [
    MaterialComponent,
    GridComponent,
    CardOverviewExample,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgGridModule,

    MdCardModule,
    MdTableModule,
    MdTooltipModule,
    RouterModule.forRoot([
      {
        path: 'material/grid',
        component: GridComponent
      },
      {
        path: 'material/table',
        component: TableBasicExample
      },
      {
        path: 'material/card',
        component: CardOverviewExample
      },
      { path: '**', redirectTo: './material' }
    ])
  ],
  providers: [],
  bootstrap: [MaterialComponent]
})
export class MaterialModule { }
