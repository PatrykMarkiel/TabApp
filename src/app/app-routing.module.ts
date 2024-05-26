import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { TabDetailsComponent } from './tab-details/tab-details.component';
 const routes :Routes=[
  { path: 'song/:id', component: TabDetailsComponent}
 ];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
