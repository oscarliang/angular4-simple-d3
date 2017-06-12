import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { Temperatures } from '../data';
import { Observable, Subject } from 'rxjs/Rx'
import { JsonApiService } from "../core/api/json-api.service";

@Component({
  templateUrl: 'multilinechart.component.html'
})
export class MultiLineChartComponent implements OnInit {

  public data: any;
  public multilineChartDataSub: Subscription;

  constructor(private jsonApiService: JsonApiService) {
  }

  ngOnInit() {
    // this.data = Temperatures;
    // console.log(this.data);
    this.multilineChartDataSub = this.getMultiLineChartData().subscribe((rs) => {
      this.data = rs;
    })


  }

  getMultiLineChartData(): Observable<any> {
    return this.jsonApiService.fetch('/multilinechart.json')
  }
}
