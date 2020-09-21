import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFrameComponent } from './shared/app-frame/app-frame.component';

import { BemModule } from 'angular-bem';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

BemModule.config({
  separators: ['-', '_', ''],
  modCase: 'kebab',
  ignoreValues: false,
});

@NgModule({
  declarations: [AppComponent, AppFrameComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, BemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
