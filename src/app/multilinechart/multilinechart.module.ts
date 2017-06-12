import { NgModule } from '@angular/core';

import { MultiLineChartComponent } from './multilinechart.component';
import { MultiLineChartRoutingModule } from './multilinechart-routing.module';
import { MultiD3LineChartComponent } from "./multiline-chart/multiline-chart.component"

@NgModule({
  imports: [
    MultiLineChartRoutingModule
  ],
  declarations: [
    MultiLineChartComponent,
    MultiD3LineChartComponent
  ]
})
export class MultiLineChartModule { }
