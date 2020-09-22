import { Component, OnInit } from '@angular/core';
import { ApiCallerService, ApiCallItem, ApiResultState } from '@deejayy/api-caller';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { take } from 'rxjs/operators';

class DeleteCall {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
  public method: string = 'DELETE';

  constructor(id: number) {
    this.path = `${this.path}/${id}`;
  }
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private apiCall: ApiCallItem = {
    api: 'https://jsonplaceholder.typicode.com/',
    path: 'users',
  };
  private apiResult: ApiResultState;

  private deleteCall: ApiCallItem;

  public data$: Observable<any>;
  public loading$: Observable<boolean>;

  public displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'username',
    'phone',
    'actions',
  ];

  constructor(
    private apiCallerService: ApiCallerService,
    public dialog: MatDialog,
  ) {}

  public ngOnInit() {
    this.apiResult = this.apiCallerService.createApiResults(this.apiCall);
    this.apiCallerService.callApi(this.apiCall);
    this.data$ = this.apiResult.data$;
    this.loading$ = this.apiResult.loading$;
  }

  public delete(id: number) {
    if (id) {
      const dialogRef = this.dialog.open(DeleteUserComponent, { width: '250px' });

      dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
        if (result) {
          this.deleteCall = new DeleteCall(id);
          const result = this.apiCallerService.createApiResults(this.deleteCall);
          this.apiCallerService.callApi(this.deleteCall);
          result.success$.pipe(take(1)).subscribe(_ => {
            this.apiCallerService.callApi(this.apiCall);
          });
        }
      });
    }
  }
}
