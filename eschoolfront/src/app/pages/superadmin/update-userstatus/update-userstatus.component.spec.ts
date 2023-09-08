import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserstatusComponent } from './update-userstatus.component';

describe('UpdateUserstatusComponent', () => {
  let component: UpdateUserstatusComponent;
  let fixture: ComponentFixture<UpdateUserstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
