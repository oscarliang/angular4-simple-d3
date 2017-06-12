import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PieChartComponent } from './piechart.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent,
    data: {
      title: 'PieChart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieChartRoutingModule {}
