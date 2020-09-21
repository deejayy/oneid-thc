import { Component, OnInit } from '@angular/core';
import { ApiCallerService, ApiCallItem, ApiResultState } from '@deejayy/api-caller';
import { Observable } from 'rxjs';

class DeleteCall {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
  public method: string = 'DELETE';

  constructor(id: number) {
    this.path = `${this.path}/${id}`;
  }
}

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.scss'],
})
export class AppFrameComponent implements OnInit {
  private apiCall: ApiCallItem = {
    api: 'https://jsonplaceholder.typicode.com/',
    path: 'users',
  };
  private apiResult: ApiResultState;

  private deleteCall: ApiCallItem;

  public data$: Observable<any>;
  public displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'username',
    'phone',
    'actions',
  ];

  constructor(private apiCallerService: ApiCallerService) {}

  public ngOnInit() {
    this.apiResult = this.apiCallerService.createApiResults(this.apiCall);
    this.apiCallerService.callApi(this.apiCall);
    this.data$ = this.apiResult.data$;
  }

  public delete(id: number) {
    if (id) {
      this.deleteCall = new DeleteCall(id);
      this.apiCallerService.callApi(this.deleteCall);
    }
  }
}
