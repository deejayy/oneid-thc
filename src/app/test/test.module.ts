import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BemModule } from 'angular-bem';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export const TEST_IMPORTS = [
  BemModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterTestingModule,
    ... TEST_IMPORTS,
  ],
  exports: [],
})
export class TestModule {}
