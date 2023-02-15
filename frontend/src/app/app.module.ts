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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true},UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
