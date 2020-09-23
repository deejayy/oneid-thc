import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ApiCallItem,
  ApiResultState,
  ApiCallerService,
} from '@deejayy/api-caller';
import { Observable, Subscription } from 'rxjs';
import { filter, delay } from 'rxjs/operators';
import { GetUserCall } from '@app/shared/model/api-catalog';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss'],
})
export class ModifyUserComponent implements OnInit, OnDestroy {
  private apiCall: ApiCallItem = {
    api: 'https://jsonplaceholder.typicode.com/',
    path: 'users',
  };
  private apiResult: ApiResultState;
  private subs: Subscription = new Subscription();

  public data$: Observable<any>;
  public loading$: Observable<boolean>;

  public form: FormGroup;
  public get name() {
    return this.form.get('name');
  }

  constructor(
    public dialogRef: MatDialogRef<ModifyUserComponent>,
    private formBuilder: FormBuilder,
    private apiCallerService: ApiCallerService,
    @Inject(MAT_DIALOG_DATA) public data?: { id: number },
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      email: [null],
      username: [null],
      phone: [null],
    });

    if (data && data.id) {
      this.apiCall = new GetUserCall(data.id);
      this.apiResult = this.apiCallerService.createApiResults(this.apiCall);
      this.apiCallerService.callApi(this.apiCall);
      this.data$ = this.apiResult.data$;
      this.loading$ = this.apiResult.loading$;

      this.data$
        .pipe(filter((record) => record && record.id && record.name))
        .subscribe((record) => {
          this.form.setValue({
            id: record.id,
            name: record.name,
            email: record.email,
            username: record.username,
            phone: record.phone,
          });
        });
    }
  }

  public ngOnInit() {}

  public cancel() {
    this.dialogRef.close();
  }

  public save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAsDirty();
      this.name.markAsTouched();
    }
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
