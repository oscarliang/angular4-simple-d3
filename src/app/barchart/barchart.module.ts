import { NgModule } from '@angular/core';

import { BarChartComponent } from './barchart.component';
import { BarChartRoutingModule } from './barchart-routing.module';
import { D3BarChartComponent } from "./bar-chart/bar-chart.component"

@NgModule({
  imports: [
    BarChartRoutingModule
  ],
  declarations: [
    BarChartComponent,
    D3BarChartComponent
  ]
})
export class BarChartModule { }
