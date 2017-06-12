import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarChartComponent } from './barchart.component';

const routes: Routes = [
  {
    path: '',
    component: BarChartComponent,
    data: {
      title: 'BarChart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarChartRoutingModule {}
