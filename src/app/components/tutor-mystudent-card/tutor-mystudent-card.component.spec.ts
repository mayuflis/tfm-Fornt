import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMystudentCardComponent } from './tutor-mystudent-card.component';

describe('TutorMystudentCardComponent', () => {
  let component: TutorMystudentCardComponent;
  let fixture: ComponentFixture<TutorMystudentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMystudentCardComponent]
    });
    fixture = TestBed.createComponent(TutorMystudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
