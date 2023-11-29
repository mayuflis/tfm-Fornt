import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubjectPriceComponent } from './table-subject-price.component';

describe('TableSubjectPriceComponent', () => {
  let component: TableSubjectPriceComponent;
  let fixture: ComponentFixture<TableSubjectPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSubjectPriceComponent]
    });
    fixture = TestBed.createComponent(TableSubjectPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
