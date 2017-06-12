import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'd3-bar-chart',
  templateUrl: 'bar-chart.component.html'
})
export class D3BarChartComponent implements OnChanges {

  title = 'D3.js with Angular 2!';
  subtitle = 'Bar Chart';
  @Input() public data: any;

  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  private tooltip: any;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnChanges(changes) {
    if (changes.data.currentValue) {
      this.initSvg()
      this.initAxis();
      this.initTooltip();
      this.drawAxis();
      this.drawBars();
    }
  }

  private initTooltip() {
    // Define the div for the tooltip
    this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
  }

  private initSvg() {
    this.svg = d3.select("svg");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");;
  }

  private initAxis() {
    this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.data.map((d) => d.letter));
    this.y.domain([0, d3.max(this.data, (d) => d.frequency)]);
  }

  private Y0() {
    return this.y(0);
  }

  private Y(d) {
    return this.y(d.frequency);
  }

  private drawAxis() {
    this.g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(this.x));
    this.g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(this.y).ticks(10, "%"))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");
  }

  private drawBars() {
    this.g.selectAll(".bar")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.x(d.letter))
      .attr("y", (d) => this.Y0())
      .attr("width", this.x.bandwidth())
      .attr("height", 0)
      .on('mouseover', (d) => {
        this.tooltip.transition()
          .duration(500)
          .style("opacity", .9);
          
        this.tooltip.html("<strong>Name:</strong> <span style='color:blue'>" + d.letter + "</span><br/>" +
          "<strong>" + d.frequency + ": </strong> <br/>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })
      .on('mouseout', () => {
        this.tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      })
      .transition()
      .duration(1000)
      .delay(100)
      .attr("y",  (d) => {
          return d.frequency < 0 ? this.Y0() : this.Y(d);
      })
      .attr("height", (d) => Math.abs(this.Y(d)-this.Y0()))
  }
}
