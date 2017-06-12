import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { Stocks } from '../data';
import { Observable, Subject } from 'rxjs/Rx'
import { JsonApiService } from "../core/api/json-api.service";

@Component({
  templateUrl: 'linechart.component.html'
})
export class LineChartComponent implements OnInit {

  public data: any;
  public lineChartDataSub: Subscription;

  constructor(private jsonApiService: JsonApiService) {
  }

  ngOnInit() {
    // this.data = Stocks;
    this.lineChartDataSub = this.getLineChartData().subscribe((rs) => {
      this.data = rs;
    })


  }

  getLineChartData(): Observable<any> {
    return this.jsonApiService.fetch('/linechart.json')
  }
}
