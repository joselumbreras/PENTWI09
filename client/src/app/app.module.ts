import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthModule } from './auth/auth.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
