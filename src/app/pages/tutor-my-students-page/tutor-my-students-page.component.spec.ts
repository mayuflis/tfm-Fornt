import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMyStudentsPageComponent } from './tutor-my-students-page.component';

describe('TutorMyStudentsPageComponent', () => {
  let component: TutorMyStudentsPageComponent;
  let fixture: ComponentFixture<TutorMyStudentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMyStudentsPageComponent]
    });
    fixture = TestBed.createComponent(TutorMyStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
