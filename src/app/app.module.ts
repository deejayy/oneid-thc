import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFrameComponent } from './shared/app-frame/app-frame.component';

import { BemModule } from 'angular-bem';

BemModule.config({
  separators: ['-', '_', ''],
  modCase: 'kebab',
  ignoreValues: false,
});

@NgModule({
  declarations: [AppComponent, AppFrameComponent],
  imports: [BrowserModule, AppRoutingModule, BemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
