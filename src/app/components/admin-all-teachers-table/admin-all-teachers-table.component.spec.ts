import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllTeachersTableComponent } from './admin-all-teachers-table.component';

describe('AdminAllTeachersTableComponent', () => {
  let component: AdminAllTeachersTableComponent;
  let fixture: ComponentFixture<AdminAllTeachersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllTeachersTableComponent]
    });
    fixture = TestBed.createComponent(AdminAllTeachersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
