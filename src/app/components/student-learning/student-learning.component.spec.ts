import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLearningComponent } from './student-learning.component';

describe('StudentLearningComponent', () => {
  let component: StudentLearningComponent;
  let fixture: ComponentFixture<StudentLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLearningComponent]
    });
    fixture = TestBed.createComponent(StudentLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
