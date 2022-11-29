import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppiingViewComponent } from './shoppiing-view/shoppiing-view.component';
import { ShoppiingAddComponent } from './shoppiing-add/shoppiing-add.component';
import { ShoppiingNavbarComponent } from './shoppiing-navbar/shoppiing-navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
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
    ShoppiingAddComponent,
    ShoppiingNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
