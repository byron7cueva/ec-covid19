import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultComponent } from './components/result/result.component';
import { ResultsComponent } from './containers/results/results.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ResultComponent,
    ResultsComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {}
