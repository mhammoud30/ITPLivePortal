import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserService} from './core/Services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/assets/material-module';
import { StatusComponent } from './status/status.component';
import { TokenInterceptorService } from './core/Interceptors/token-interceptor.service';

import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';






import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { TalentHomeModule } from './talent-home/talent-home.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    CoreModule,
    LoginModule,
    TalentHomeModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true},UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
