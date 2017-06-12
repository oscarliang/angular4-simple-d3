import { NgModule } from '@angular/core';

import { LineChartComponent } from './linechart.component';
import { LineChartRoutingModule } from './linechart-routing.module';
import { D3LineChartComponent } from "./line-chart/line-chart.component"

@NgModule({
  imports: [
    LineChartRoutingModule
  ],
  declarations: [
    LineChartComponent,
    D3LineChartComponent
  ]
})
export class LineChartModule { }
