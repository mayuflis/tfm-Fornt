import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMySubjectsPageComponent } from './tutor-my-subjects-page.component';

describe('TutorMySubjectsPageComponent', () => {
  let component: TutorMySubjectsPageComponent;
  let fixture: ComponentFixture<TutorMySubjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMySubjectsPageComponent]
    });
    fixture = TestBed.createComponent(TutorMySubjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
