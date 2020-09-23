import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserComponent } from './delete-user.component';
import { MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ApiCallerService } from '@deejayy/api-caller';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BemModule } from 'angular-bem';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

const mockApiCallerService = {
  createApiResults: jest.fn().mockReturnValue({ data$: of(), loading$: of(false) }),
  callApi: jest.fn(),
}
const mockMatDialog = {}
const mockMatDialogRef = {}

describe('DeleteUserComponent', () => {
  let component: DeleteUserComponent;
  let fixture: ComponentFixture<DeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatDialogModule, MatButtonModule, BemModule, NoopAnimationsModule],
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
