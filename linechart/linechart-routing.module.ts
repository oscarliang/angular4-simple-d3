import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineChartComponent } from './linechart.component';

const routes: Routes = [
  {
    path: '',
    component: LineChartComponent,
    data: {
      title: 'LineChart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineChartRoutingModule {}
