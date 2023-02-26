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

const routes: Routes = [
  /* {path:'access/login', component: SiginComponent}, */
  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'talent',component: TalentComponent,canActivate: [AuthGuard]},
      { path: 'influencers', component: InfluencersComponent, canActivate: [AuthGuard]},
      { path: 'newInfluencer', component: NewInfluencerComponent, canActivate: [AuthGuard]},
      { path: 'newLog', component: NewPackageLogComponent, canActivate: [AuthGuard]},
      { path: 'logs', component: LogsComponent, canActivate: [AuthGuard]},
      { path: 'influencerProfile/:id', component: InfluencerProfileComponent, canActivate: [AuthGuard]},
      { path: 'newCelebrity', component: NewCelebrityComponent, canActivate: [AuthGuard]},
      { path: 'celebrities', component: CelebritiesComponent, canActivate: [AuthGuard]},
      { path: 'celebrityProfile/:id', component: CelebrityProfileComponent, canActivate: [AuthGuard]},
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
