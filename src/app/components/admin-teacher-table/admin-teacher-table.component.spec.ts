import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherTableComponent } from './admin-teacher-table.component';

describe('AdminTeacherTableComponent', () => {
  let component: AdminTeacherTableComponent;
  let fixture: ComponentFixture<AdminTeacherTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTeacherTableComponent]
    });
    fixture = TestBed.createComponent(AdminTeacherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
