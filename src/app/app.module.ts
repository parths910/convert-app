import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LengthComponent } from './length/length.component';
import { HomeComponent } from './home/home.component';
import { WeightComponent } from './weight/weight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LengthComponent,
    HomeComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
