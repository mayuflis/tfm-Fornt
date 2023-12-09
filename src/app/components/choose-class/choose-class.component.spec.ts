import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClassComponent } from './choose-class.component';

describe('ChooseClassComponent', () => {
  let component: ChooseClassComponent;
  let fixture: ComponentFixture<ChooseClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseClassComponent]
    });
    fixture = TestBed.createComponent(ChooseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
