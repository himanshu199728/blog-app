import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppContentComponent } from './app-content/app-content.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ContentService } from './content.service';
@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    AuthMainComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AppContentComponent,
    AuthMainComponent,
    HomePageComponent
  ],
  providers: [UserService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
