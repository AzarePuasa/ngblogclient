import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
