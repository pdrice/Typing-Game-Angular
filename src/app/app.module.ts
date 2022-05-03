import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
