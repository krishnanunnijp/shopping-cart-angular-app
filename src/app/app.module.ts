import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppiingViewComponent } from './shoppiing-view/shoppiing-view.component';
import { ShoppiingAddComponent } from './shoppiing-add/shoppiing-add.component';
 const myRoute : Routes=[
  {
    path:"",
    component: ShoppiingAddComponent
  },
  {
    path:"view",
    component: ShoppiingViewComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    ShoppiingViewComponent,
    ShoppiingAddComponent
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
