import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { StatusComponent } from './status/status.component';
import { InfluencersComponent } from './talent/influencers/influencers.component';
import { NewInfluencerComponent } from './talent/new-influencer/new-influencer.component';
import { TalentComponent } from './talent/talent.component';

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
