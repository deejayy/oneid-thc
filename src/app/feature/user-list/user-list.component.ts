import { Component, OnInit } from '@angular/core';
import {
  ApiCallerService,
  ApiCallItem,
  ApiResultState,
} from '@deejayy/api-caller';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { take } from 'rxjs/operators';
import { ModifyUserComponent } from '../modify-user/modify-user.component';
import {
  DeleteCall,
  UpdateCall,
  InsertCall,
  ListCall,
} from '@app/shared/model/api-catalog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private apiCall: ApiCallItem = new ListCall();
  private apiResult: ApiResultState;

  private deleteCall: ApiCallItem;
  private modifyCall: ApiCallItem;

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
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.apiResult = this.apiCallerService.createApiResults(this.apiCall);
    this.apiCallerService.callApi(this.apiCall);
    this.data$ = this.apiResult.data$;
    this.loading$ = this.apiResult.loading$;
  }

  public delete(id: number) {
    if (id) {
      const dialogRef = this.dialog.open(DeleteUserComponent, {
        width: '250px',
      });

      dialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe((result) => {
          if (result) {
            this.deleteCall = new DeleteCall(id);
            const result = this.apiCallerService.createApiResults(
              this.deleteCall
            );
            this.apiCallerService.callApi(this.deleteCall);
            result.success$.pipe(take(1)).subscribe((_) => {
              this.apiCallerService.callApi(this.apiCall);
            });
          }
        });
    }
  }

  public edit(id?: number) {
    const dialogRef = this.dialog.open(ModifyUserComponent, {
      disableClose: true,
      data: { id },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((formData) => {
        if (formData) {
          if (formData.id) {
            this.modifyCall = new UpdateCall(formData.id, formData);
          } else {
            delete formData.id;
            this.modifyCall = new InsertCall({ ...formData });
          }
          const result = this.apiCallerService.createApiResults(
            this.modifyCall
          );
          this.apiCallerService.callApi(this.modifyCall);
          result.success$.pipe(take(1)).subscribe((_) => {
            this.apiCallerService.callApi(this.apiCall);
          });
        }
      });
  }
}
