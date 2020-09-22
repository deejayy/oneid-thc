import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiCallerService } from '@deejayy/api-caller';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BemModule } from 'angular-bem';
import { DeleteUserModule } from '../delete-user/delete-user.module';
import { ModifyUserModule } from '../modify-user/modify-user.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

const mockApiCallerService = {
  createApiResults: jest.fn().mockReturnValue({ data$: of(), loading$: of(false) }),
  callApi: jest.fn(),
}
const mockMatDialog = {}
const mockMatDialogRef = {}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CommonModule,
        BemModule,
        DeleteUserModule,
        ModifyUserModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule
      ],
      declarations: [UserListComponent],
      providers: [
        { provide: ApiCallerService, useValue: mockApiCallerService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
