import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UviewTimetableComponent } from './uview-timetable.component';

describe('UviewTimetableComponent', () => {
  let component: UviewTimetableComponent;
  let fixture: ComponentFixture<UviewTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UviewTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UviewTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
