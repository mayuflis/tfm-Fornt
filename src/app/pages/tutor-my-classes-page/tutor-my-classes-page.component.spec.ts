import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMyClassesPageComponent } from './tutor-my-classes-page.component';

describe('TutorMyClassesPageComponent', () => {
  let component: TutorMyClassesPageComponent;
  let fixture: ComponentFixture<TutorMyClassesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMyClassesPageComponent]
    });
    fixture = TestBed.createComponent(TutorMyClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
