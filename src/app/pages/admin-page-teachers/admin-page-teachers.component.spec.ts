import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageTeachersComponent } from './admin-page-teachers.component';

describe('AdminPageTeachersComponent', () => {
  let component: AdminPageTeachersComponent;
  let fixture: ComponentFixture<AdminPageTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageTeachersComponent]
    });
    fixture = TestBed.createComponent(AdminPageTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
