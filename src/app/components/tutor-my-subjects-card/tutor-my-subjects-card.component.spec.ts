import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMySubjectsCardComponent } from './tutor-my-subjects-card.component';

describe('TutorMySubjectsCardComponent', () => {
  let component: TutorMySubjectsCardComponent;
  let fixture: ComponentFixture<TutorMySubjectsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMySubjectsCardComponent]
    });
    fixture = TestBed.createComponent(TutorMySubjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
