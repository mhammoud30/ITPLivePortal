import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserService} from './Service/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/material-module';
import { StatusComponent } from './status/status.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { TalentComponent } from './talent/talent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InfluencersComponent } from './talent/influencers/influencers.component';
import { NewInfluencerComponent } from './talent/new-influencer/new-influencer.component';
import { ModalpopupComponent } from './talent/modalpopup/modalpopup.component';
import {MatNativeDateModule} from '@angular/material/core';
import { NewPackageLogComponent } from './talent/new-package-log/new-package-log.component';
import { InfluencerProfileComponent } from './talent/influencer-profile/influencer-profile.component';
import { NewCelebrityComponent } from './talent/new-celebrity/new-celebrity.component';
import { CelebritiesComponent } from './talent/celebrities/celebrities.component';
import { CelebrityProfileComponent } from './talent/celebrity-profile/celebrity-profile.component';
import { ModalpopupCelebrityComponent } from './talent/modalpopup-celebrity/modalpopup-celebrity.component';
import { LogsComponent } from './talent/logs/logs.component';
import { SalesHomeComponent } from './sales/sales-home/sales-home.component';
import { NewBriefComponent } from './sales/new-sales-brief/new-brief.component';
import { BriefsFromSalesComponent } from './talent/briefs-from-sales/briefs-from-sales.component';
import { ViewSalesBriefComponent } from './talent/view-sales-brief/view-sales-brief.component';
import { TasksFromTalentHeadComponent } from './talent/tasks-from-talent-head/tasks-from-talent-head.component';
import { ViewTaskComponent } from './talent/view-task/view-task.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    HeaderComponent,
    SidenavComponent,
    TalentComponent,
    LoginComponent,
    InfluencersComponent,
    NewInfluencerComponent,
    ModalpopupComponent,
    NewPackageLogComponent,
    InfluencerProfileComponent,
    NewCelebrityComponent,
    CelebritiesComponent,
    CelebrityProfileComponent,
    ModalpopupCelebrityComponent,
    LogsComponent,
    SalesHomeComponent,
    NewBriefComponent,
    BriefsFromSalesComponent,
    ViewSalesBriefComponent,
    TasksFromTalentHeadComponent,
    ViewTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true},UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
