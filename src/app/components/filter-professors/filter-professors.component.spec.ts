import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FilterProfessorsComponent } from './filter-professors.component';

describe('FilterProfessorsComponent', () => {
  let component: FilterProfessorsComponent;
  let fixture: ComponentFixture<FilterProfessorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterProfessorsComponent]
    });
    fixture = TestBed.createComponent(FilterProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
