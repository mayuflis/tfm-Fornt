import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorStudentsPageComponent } from './tutor-students-page.component';

describe('TutorStudentsPageComponent', () => {
  let component: TutorStudentsPageComponent;
  let fixture: ComponentFixture<TutorStudentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorStudentsPageComponent]
    });
    fixture = TestBed.createComponent(TutorStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
