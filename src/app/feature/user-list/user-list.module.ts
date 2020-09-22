import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UserListComponent } from './user-list.component';
import { BemModule } from 'angular-bem';
import { DeleteUserModule } from '../delete-user/delete-user.module';
import { ModifyUserModule } from '../modify-user/modify-user.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    BemModule,
    DeleteUserModule,
    ModifyUserModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [UserListComponent],
})
export class UserListModule {}
