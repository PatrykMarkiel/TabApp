import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabComponent } from './tab/tab.component';
import { TabDetailsComponent } from './tab-details/tab-details.component';

@NgModule({
  providers: [],
  declarations: [
    AppComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TabDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
