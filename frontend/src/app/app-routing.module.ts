import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/Guards/auth.guard';
import { HomeComponent } from './home/home.component';


import { StatusComponent } from './status/status.component';


import { NewBriefComponent } from './sales-home/new-sales-brief/new-brief.component';


import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
 
  { path: 'login', component: LoginPageComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
  {
    path: 'talent',
    loadChildren: () => import('./talent-home/talent-home.module').then(m => m.TalentHomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales-home/sales-home.module').then(m => m.SalesHomeModule),
    canActivate: [AuthGuard],
  },]
 },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: '**', component: StatusComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
