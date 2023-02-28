import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCelebrityComponent } from './talent/new-celebrity/new-celebrity.component';

import { StatusComponent } from './status/status.component';
import { InfluencerProfileComponent } from './talent/influencer-profile/influencer-profile.component';
import { InfluencersComponent } from './talent/influencers/influencers.component';
import { NewInfluencerComponent } from './talent/new-influencer/new-influencer.component';
import { NewPackageLogComponent } from './talent/new-package-log/new-package-log.component';
import { TalentComponent } from './talent/talent.component';
import { CelebritiesComponent } from './talent/celebrities/celebrities.component';
import { CelebrityProfileComponent } from './talent/celebrity-profile/celebrity-profile.component';
import { LogsComponent } from './talent/logs/logs.component';
import { SalesHomeComponent } from './sales/sales-home/sales-home.component';
import { NewBriefComponent } from './sales/new-sales-brief/new-brief.component';
import { BriefsFromSalesComponent } from './talent/briefs-from-sales/briefs-from-sales.component';
import { ViewSalesBriefComponent } from './talent/view-sales-brief/view-sales-brief.component';
import { TasksFromTalentHeadComponent } from './talent/tasks-from-talent-head/tasks-from-talent-head.component';
import { ViewTaskComponent } from './talent/view-task/view-task.component';

const routes: Routes = [
  /* {path:'access/login', component: SiginComponent}, */
  { path: 'login', component: LoginComponent },

  {
    path: 'talent',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'forms',component: TalentComponent},
      { path: 'influencers', component: InfluencersComponent},
      { path: 'newInfluencer', component: NewInfluencerComponent},
      { path: 'newLog', component: NewPackageLogComponent},
      { path: 'logs', component: LogsComponent},
      { path: 'influencerProfile/:id', component: InfluencerProfileComponent},
      { path: 'newCelebrity', component: NewCelebrityComponent},
      { path: 'celebrities', component: CelebritiesComponent},
      { path: 'celebrityProfile/:id', component: CelebrityProfileComponent},
      { path: 'briefsFromSales', component: BriefsFromSalesComponent},
      { path: 'viewSalesBrief/:id', component: ViewSalesBriefComponent},
      { path: 'tasksFromTalentHead', component: TasksFromTalentHeadComponent},
      { path: 'viewTask/:id', component: ViewTaskComponent},

    ]
  },
  {
    path: 'sales',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'forms',component: SalesHomeComponent},
      { path: 'newSalesBrief', component: NewBriefComponent},

    ]
  },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: '**', component: StatusComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
