import { Component, OnInit } from '@angular/core';
import { TypeCase } from '@core/enums/TypeCase';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  eTypeCase = TypeCase;

  constructor() { }

  ngOnInit(): void {
  }

}
