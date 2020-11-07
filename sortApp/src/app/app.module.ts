import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './components/user/user.module';
import { HttpClientModule } from '@angular/common/http';
//import { Search2Component } from './components/search2/search2.component';

@NgModule({
  declarations: [AppComponent, //Search2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
