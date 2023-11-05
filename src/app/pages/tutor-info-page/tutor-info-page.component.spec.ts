import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorInfoPageComponent } from './tutor-info-page.component';

describe('TutorInfoPageComponent', () => {
  let component: TutorInfoPageComponent;
  let fixture: ComponentFixture<TutorInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorInfoPageComponent]
    });
    fixture = TestBed.createComponent(TutorInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
