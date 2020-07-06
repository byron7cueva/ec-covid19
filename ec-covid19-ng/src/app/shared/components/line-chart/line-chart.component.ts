import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as uuid from 'uuid';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3TimeFormat from 'd3-time-format';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';

import { Margin } from '@core/interfaces/Margin';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  private widthSvg: number;
  private heightSvg: number;
  private svg: any;
  private xScale: any;
  private yScale: any;
  private dataLength: number;

  id: string;

  @Input() width: number;
  @Input() height: number;
  @Input() margin: Margin;
  @Input() data: any;

  constructor() {
    this.id = uuid.v4();
  }

  ngOnInit(): void {
    if (this.width && this.height && this.margin) {
      this.widthSvg = this.width - this.margin.left - this.margin.right;
      this.heightSvg = this.height - this.margin.bottom - this.margin.top;
    }
  }

  ngAfterViewInit(): void {
    this.buildSvg();
    this.buildAxis();
    this.drawLine();
  }

  private buildSvg(): void {
    if (this.widthSvg && this.heightSvg) {
      // Add svg
      this.svg = d3Selection.select(document.getElementById(this.id))
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    }
  }

  private buildAxis(): void {
    if (this.data) {
      const parseTime = d3TimeFormat.timeParse('%Y-%m-%d');
      const xFormat = '%-m/%-d';
      const dataXrange = d3Array.extent(this.data, d => parseTime(d.x));
      const dataYrange = [0, d3Array.max(this.data, d => d.y)];
      this.xScale = d3Scale.scaleTime()
      // .domain([new Date('2020-03-13'), new Date('2020-03-23')])
        .domain(dataXrange)
        .range([0, this.widthSvg]);

      // x axis in group tag
      this.svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${this.heightSvg})`)
        .call(d3Axis.axisBottom(this.xScale).tickFormat(d3TimeFormat.timeFormat(xFormat)));

      this.yScale = d3Scale.scaleLinear()
        // .domain([0, 981])
        .domain(dataYrange)
        .range([this.heightSvg, 0]);

        // y axis inn group tag
      this.svg.append('g')
        .attr('class', 'y axis')
        .call(d3Axis.axisLeft(this.yScale));
      }
  }

  private drawLine() {
    const parseTime = d3TimeFormat.timeParse('%Y-%m-%d');
    const line = d3Shape.line()
    .x(d => this.xScale(parseTime(d.x)))
    .y(d => this.yScale(d.y))
    .curve(d3Shape.curveMonotoneX);

    this.svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#ffab00');

    this.svg.selectAll('.dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => this.xScale(parseTime(d.x)))
      .attr('cy', d => this.yScale(d.y))
      .attr('r', 5);
  }
}
