import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserComponent } from './delete-user.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ApiCallerService } from '@deejayy/api-caller';
import { mockApiCallerService, mockMatDialog, mockMatDialogRef } from '@app/test/mock-services';
import { TestModule, TEST_IMPORTS } from '@app/test/test.module';

describe('DeleteUserComponent', () => {
  let component: DeleteUserComponent;
  let fixture: ComponentFixture<DeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, ... TEST_IMPORTS],
      declarations: [DeleteUserComponent],
      providers: [
        { provide: ApiCallerService, useValue: mockApiCallerService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
