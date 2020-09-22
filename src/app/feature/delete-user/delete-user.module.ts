import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './delete-user.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BemModule } from 'angular-bem';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeleteUserComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, BemModule],
  entryComponents: [DeleteUserComponent],
})
export class DeleteUserModule {}
