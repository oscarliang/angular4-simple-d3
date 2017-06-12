import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { STATISTICS } from '../data';
import { Observable, Subject } from 'rxjs/Rx'
import { JsonApiService } from "../core/api/json-api.service";

@Component({
  templateUrl: 'barchart.component.html'
})
export class BarChartComponent implements OnInit, OnDestroy {

  public data: any;
  public barChartDataSub: Subscription;

  constructor(private jsonApiService: JsonApiService) {
  }

  ngOnInit() {
    // this.data = STATISTICS;
    // console.log(this.data);

    this.barChartDataSub = this.getBarChartData().subscribe((rs) => {
      this.data = rs;
    })


  }

  getBarChartData(): Observable<any> {
    return this.jsonApiService.fetch('/barchart.json')
  }

  ngOnDestroy() {
    this.barChartDataSub.unsubscribe();
  }
}
