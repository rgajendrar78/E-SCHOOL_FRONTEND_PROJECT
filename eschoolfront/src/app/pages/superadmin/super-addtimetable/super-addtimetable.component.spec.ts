import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAddtimetableComponent } from './super-addtimetable.component';

describe('SuperAddtimetableComponent', () => {
  let component: SuperAddtimetableComponent;
  let fixture: ComponentFixture<SuperAddtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAddtimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAddtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
