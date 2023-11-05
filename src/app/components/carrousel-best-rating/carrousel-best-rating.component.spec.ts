import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselBestRatingComponent } from './carrousel-best-rating.component';

describe('CarrouselBestRatingComponent', () => {
  let component: CarrouselBestRatingComponent;
  let fixture: ComponentFixture<CarrouselBestRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselBestRatingComponent]
    });
    fixture = TestBed.createComponent(CarrouselBestRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
