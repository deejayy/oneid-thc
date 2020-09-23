import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { ApiCallerService } from '@deejayy/api-caller';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DeleteUserModule } from '../delete-user/delete-user.module';
import { ModifyUserModule } from '../modify-user/modify-user.module';
import {
  mockApiCallerService,
  mockMatDialog,
  mockMatDialogRef,
} from '@test/mock-services';
import { TestModule, TEST_IMPORTS } from '@test/test.module';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, DeleteUserModule, ModifyUserModule, ... TEST_IMPORTS],
      declarations: [UserListComponent],
      providers: [
        { provide: ApiCallerService, useValue: mockApiCallerService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
      ],
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
