import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data = [
    {x: '2020-03-13', y: 22},
    {x: '2020-03-14', y: 27},
    {x: '2020-03-15', y: 37},
    {x: '2020-03-16', y: 58},
    {x: '2020-03-17', y: 111},
    {x: '2020-03-18', y: 168},
    {x: '2020-03-19', y: 260},
    {x: '2020-03-20', y: 426},
    {x: '2020-03-21', y: 532},
    {x: '2020-03-22', y: 789},
    {x: '2020-03-23', y: 981}
  ];
}
