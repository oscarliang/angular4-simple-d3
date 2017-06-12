import { NgModule } from '@angular/core';

import { PieChartComponent } from './piechart.component';
import { PieChartRoutingModule } from './piechart-routing.module';
import { D3PieChartComponent } from "./pie-chart/pie-chart.component"

@NgModule({
  imports: [
    PieChartRoutingModule
  ],
  declarations: [
    PieChartComponent,
    D3PieChartComponent
  ]
})
export class PieChartModule { }
