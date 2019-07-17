import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxsModule} from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
