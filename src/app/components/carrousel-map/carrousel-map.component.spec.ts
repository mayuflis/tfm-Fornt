import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselMapComponent } from './carrousel-map.component';

describe('CarrouselMapComponent', () => {
  let component: CarrouselMapComponent;
  let fixture: ComponentFixture<CarrouselMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselMapComponent]
    });
    fixture = TestBed.createComponent(CarrouselMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
