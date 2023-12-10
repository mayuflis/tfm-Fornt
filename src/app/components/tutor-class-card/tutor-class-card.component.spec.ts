import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorClassCardComponent } from './tutor-class-card.component';

describe('TutorClassCardComponent', () => {
  let component: TutorClassCardComponent;
  let fixture: ComponentFixture<TutorClassCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorClassCardComponent]
    });
    fixture = TestBed.createComponent(TutorClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
