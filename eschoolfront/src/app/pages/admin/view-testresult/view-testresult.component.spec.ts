import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestresultComponent } from './view-testresult.component';

describe('ViewTestresultComponent', () => {
  let component: ViewTestresultComponent;
  let fixture: ComponentFixture<ViewTestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTestresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
