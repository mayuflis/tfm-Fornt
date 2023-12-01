import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyTeachersPageComponent } from './student-my-teachers-page.component';

describe('StudentMyTeachersPageComponent', () => {
  let component: StudentMyTeachersPageComponent;
  let fixture: ComponentFixture<StudentMyTeachersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMyTeachersPageComponent]
    });
    fixture = TestBed.createComponent(StudentMyTeachersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
