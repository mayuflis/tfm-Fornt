import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselFilterComponent } from './carrousel-filter.component';

describe('CarrouselFilterComponent', () => {
  let component: CarrouselFilterComponent;
  let fixture: ComponentFixture<CarrouselFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselFilterComponent]
    });
    fixture = TestBed.createComponent(CarrouselFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
