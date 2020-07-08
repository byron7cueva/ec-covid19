import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as uuid from 'uuid';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3TimeFormat from 'd3-time-format';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';

import { Margin } from '@core/interfaces/Margin';

const parseTime = d3TimeFormat.timeParse('%Y-%m-%d');
const xFormat = '%-m/%-d';

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
    this.drawLegend();
  }

  /**
   * Add svg to component
   */
  private buildSvg(): void {
    if (this.widthSvg && this.heightSvg) {
      this.svg = d3Selection.select(document.getElementById(this.id))
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    }
  }

  private buildAxis() {
    const dataXY = this.data.reduce((acc, cur, i) => {
      if (i === 1) {
        return acc.data.concat(cur.data);
      }
      return acc.concat(cur.data);
    });

    const dataXrange = d3Array.extent(dataXY, d => parseTime(d.x));
    const dataYrange = [0, d3Array.max(dataXY, d => d.y)];

    this.xScale = d3Scale.scaleTime()
        .domain(dataXrange)
        .range([0, this.widthSvg]);

    this.yScale = d3Scale.scaleLinear()
        .domain(dataYrange)
        .range([this.heightSvg, 0]);

    // x axis in group tag
    this.svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${this.heightSvg})`)
    .attr('color', '#f5f6fa')
    .call(d3Axis.axisBottom(this.xScale).tickFormat(d3TimeFormat.timeFormat(xFormat)));

    // y axis inn group tag
    this.svg.append('g')
      .attr('class', 'y axis')
      .attr('color', '#f5f6fa')
      .call(d3Axis.axisLeft(this.yScale));
  }

  private drawLine() {
    const line = d3Shape.line()
    .x(d => this.xScale(parseTime(d.x)))
    .y(d => this.yScale(d.y))
    .curve(d3Shape.curveMonotoneX);

    const lines = this.svg.selectAll('lines')
      .data(this.data)
      .enter()
      .append('g');

    lines.append('path')
    .attr('class', d => d.id)
    .attr('d', d => line(d.data))
    .attr('fill', 'none')
    .attr('stroke', d => d.color);

    this.data.forEach(item => {
      this.svg.selectAll(`.${item.id}`)
      .data(item.data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => this.xScale(parseTime(d.x)))
      .attr('cy', d => this.yScale(d.y))
      .attr('r', 3)
      .attr('fill', item.color);
    });
  }

  private drawLegend() {
    const numSpaces = this.data.length + 2;
    const widthSpace = this.width / numSpaces;
    const widthLegend = 70;
    const widthRect = 5;
    const legend = this.svg.selectAll('legend')
      .data(this.data)
      .enter()
      .append('g')
      .attr('class', 'legend');

    legend.append('circle')
    .attr('cy', this.height - widthLegend)
    .attr('cx', (d, i) => widthSpace * (i + 1))
    .attr('r', widthRect)
    .style('fill', d => d.color);

    legend.append('text')
      .attr('y', this.height - widthLegend + widthRect)
      .attr('x', (d, i) => widthSpace * (i + 1) + 12)
      .text(d => d.id)
      .attr('fill', d => d.color);
  }
}
