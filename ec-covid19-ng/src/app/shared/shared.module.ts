import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LineChartComponent
  ]
})
export class SharedModule { }
