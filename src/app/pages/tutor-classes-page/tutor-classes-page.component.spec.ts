import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorClassesPageComponent } from './tutor-classes-page.component';

describe('TutorClassesComponent', () => {
  let component: TutorClassesPageComponent;
  let fixture: ComponentFixture<TutorClassesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorClassesPageComponent]
    });
    fixture = TestBed.createComponent(TutorClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
