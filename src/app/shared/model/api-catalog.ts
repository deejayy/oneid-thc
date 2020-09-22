import { ApiCallItem } from '@deejayy/api-caller';

export class DeleteCall implements ApiCallItem {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
  public method: string = 'DELETE';

  constructor(id: number) {
    this.path = `${this.path}/${id}`;
  }
}

export class UpdateCall implements ApiCallItem {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
  public method: string = 'PUT';

  constructor(id: number, public payload: object) {
    this.path = `${this.path}/${id}`;
  }
}

export class InsertCall implements ApiCallItem {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';

  constructor (public payload: object) {

  }
}

export class ListCall implements ApiCallItem {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
}

export class GetUserCall {
  public api: string = 'https://jsonplaceholder.typicode.com/';
  public path: string = 'users';
  public method: string = 'GET';

  constructor(id: number) {
    this.path = `${this.path}/${id}`;
  }
}
