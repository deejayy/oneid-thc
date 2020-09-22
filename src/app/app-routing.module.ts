import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';
import { UserListModule } from './feature/user-list/user-list.module';
import { DeleteUserModule } from './feature/delete-user/delete-user.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
