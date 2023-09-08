import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UviewAssignmentsComponent } from './uview-assignments.component';

describe('UviewAssignmentsComponent', () => {
  let component: UviewAssignmentsComponent;
  let fixture: ComponentFixture<UviewAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UviewAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UviewAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
