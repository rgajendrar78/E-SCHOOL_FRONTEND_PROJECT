import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperViewtimetableComponent } from './super-viewtimetable.component';

describe('SuperViewtimetableComponent', () => {
  let component: SuperViewtimetableComponent;
  let fixture: ComponentFixture<SuperViewtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperViewtimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperViewtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
