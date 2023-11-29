import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassesPageComponent } from './student-classes-page.component';

describe('StudentClassesPageComponent', () => {
  let component: StudentClassesPageComponent;
  let fixture: ComponentFixture<StudentClassesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentClassesPageComponent]
    });
    fixture = TestBed.createComponent(StudentClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
