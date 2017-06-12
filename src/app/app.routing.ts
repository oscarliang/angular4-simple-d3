import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'linechart',
        loadChildren: './linechart/linechart.module#LineChartModule'
      },
      {
        path: 'multilinechart',
        loadChildren: './multilinechart/multilinechart.module#MultiLineChartModule'
      },
      {
        path: 'barchart',
        loadChildren: './barchart/barchart.module#BarChartModule'
      },
      {
        path: 'piechart',
        loadChildren: './piechart/piechart.module#PieChartModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
