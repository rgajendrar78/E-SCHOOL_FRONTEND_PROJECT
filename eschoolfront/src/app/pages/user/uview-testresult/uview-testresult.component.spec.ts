import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UviewTestresultComponent } from './uview-testresult.component';

describe('UviewTestresultComponent', () => {
  let component: UviewTestresultComponent;
  let fixture: ComponentFixture<UviewTestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UviewTestresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UviewTestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
