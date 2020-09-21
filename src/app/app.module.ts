import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFrameComponent } from './shared/app-frame/app-frame.component';

import { BemModule } from 'angular-bem';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiCallerModule } from '@deejayy/api-caller';
import { environment } from '@env/environment';

import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';

BemModule.config({
  separators: ['-', '_', ''],
  modCase: 'kebab',
  ignoreValues: false,
});

@NgModule({
  declarations: [AppComponent, AppFrameComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BemModule,
    MatTableModule,
    MatCommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'One Identity THC',
      maxAge: 200,
      logOnly: environment.production,
    }),
    ApiCallerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
