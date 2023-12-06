import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageSubjectsComponent } from './admin-page-subjects.component';

describe('AdminPageSubjectsComponent', () => {
  let component: AdminPageSubjectsComponent;
  let fixture: ComponentFixture<AdminPageSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageSubjectsComponent]
    });
    fixture = TestBed.createComponent(AdminPageSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
