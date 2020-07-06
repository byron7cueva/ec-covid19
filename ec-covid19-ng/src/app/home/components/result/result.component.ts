import { Component, OnInit, Input } from '@angular/core';
import { TypeCase, getTitle } from '@core/enums/TypeCase';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() value: number;
  @Input() type: TypeCase;

  constructor() { }

  ngOnInit(): void {
  }

  getTitleType(): string {
    return getTitle(this.type);
  }

}
