import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule {}
