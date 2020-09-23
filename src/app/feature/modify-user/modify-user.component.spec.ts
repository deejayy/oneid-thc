import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserComponent } from './modify-user.component';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiCallerService } from '@deejayy/api-caller';
import {
  mockApiCallerService,
  mockMatDialog,
  mockMatDialogRef,
} from '@app/test/mock-services';
import { TestModule, TEST_IMPORTS } from '@app/test/test.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('ModifyUserComponent', () => {
  let component: ModifyUserComponent;
  let fixture: ComponentFixture<ModifyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, ...TEST_IMPORTS, ReactiveFormsModule],
      declarations: [ModifyUserComponent],
      providers: [
        { provide: ApiCallerService, useValue: mockApiCallerService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { data: { id: 1 } } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
