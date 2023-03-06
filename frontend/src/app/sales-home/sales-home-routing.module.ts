import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewBriefComponent } from './new-sales-brief/new-brief.component';
import { SalesHomeComponent } from './sales-home/sales-home.component';



const routes: Routes = [
  { path: 'forms', component: SalesHomeComponent},
  { path: 'newSalesBrief', component: NewBriefComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SalesHomeRoutingModule { }
