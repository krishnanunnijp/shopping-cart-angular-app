import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppiingViewComponent } from './shoppiing-view/shoppiing-view.component';
 const myRoute : Routes=[
  {
    path:"",
    component: ShoppiingViewComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    ShoppiingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
