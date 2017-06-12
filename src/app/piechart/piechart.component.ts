import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { Stats } from '../data';
import { Observable, Subject } from 'rxjs/Rx'
import { JsonApiService } from "../core/api/json-api.service";

@Component({
  templateUrl: 'piechart.component.html'
})
export class PieChartComponent implements OnInit, OnDestroy {

  public data: any;
  public pieChartDataSub: Subscription;

  constructor(private jsonApiService: JsonApiService) {
  }

  ngOnInit() {
    // this.data = Stats;
    // console.log(this.data);

    this.pieChartDataSub = this.getPieChartData().subscribe((rs) => {
      this.data = rs;
    })


  }

  getPieChartData(): Observable<any> {
    return this.jsonApiService.fetch('/piechart.json')
  }

  ngOnDestroy() {
    this.pieChartDataSub.unsubscribe();
  }
}
