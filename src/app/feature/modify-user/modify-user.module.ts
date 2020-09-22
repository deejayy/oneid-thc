import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyUserComponent } from './modify-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BemModule } from 'angular-bem';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModifyUserComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, BemModule, ReactiveFormsModule, MatInputModule],
  entryComponents: [ModifyUserComponent],
})
export class ModifyUserModule {}
