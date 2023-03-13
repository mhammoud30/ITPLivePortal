import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TalentFormsComponent } from './talent-forms/talent-forms.component';
import { BriefsFromSalesComponent } from './briefs-from-sales/briefs-from-sales.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { CelebrityProfileComponent } from './celebrity-profile/celebrity-profile.component';
import { InfluencerProfileComponent } from './influencer-profile/influencer-profile.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { LogsComponent } from './logs/logs.component';
import { NewCelebrityComponent } from './new-celebrity/new-celebrity.component';
import { NewInfluencerComponent } from './new-influencer/new-influencer.component';
import { NewPackageLogComponent } from './new-package-log/new-package-log.component';
import { TasksFromTalentHeadComponent } from './tasks-from-talent-head/tasks-from-talent-head.component';
import { ViewSalesBriefComponent } from './view-sales-brief/view-sales-brief.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AuthGuard } from '../core/Guards/auth.guard';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { InfluencerRatingComponent } from './influencer-rating/influencer-rating.component';


const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  { path: 'forms', component: TalentFormsComponent},
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
  { path: 'influencer-rating/:id', component: InfluencerRatingComponent},

  { path: 'access-denied', component: AccessDeniedComponent, canActivate: [AuthGuard] }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TalentHomeRoutingModule { }
