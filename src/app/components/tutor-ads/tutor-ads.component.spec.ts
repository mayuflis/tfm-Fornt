import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAdsComponent } from './tutor-ads.component';

describe('TutorAdsComponent', () => {
  let component: TutorAdsComponent;
  let fixture: ComponentFixture<TutorAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorAdsComponent]
    });
    fixture = TestBed.createComponent(TutorAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
