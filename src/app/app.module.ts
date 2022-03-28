import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkLoaderModule } from 'projects/sk-loader-lib/src/lib';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SkLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
