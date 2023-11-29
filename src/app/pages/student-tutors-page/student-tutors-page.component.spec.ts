import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTutorsPageComponent } from './student-tutors-page.component';

describe('StudentTutorsPageComponent', () => {
  let component: StudentTutorsPageComponent;
  let fixture: ComponentFixture<StudentTutorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTutorsPageComponent]
    });
    fixture = TestBed.createComponent(StudentTutorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
