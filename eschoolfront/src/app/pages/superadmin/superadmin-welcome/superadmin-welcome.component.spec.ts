import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminWelcomeComponent } from './superadmin-welcome.component';

describe('SuperadminWelcomeComponent', () => {
  let component: SuperadminWelcomeComponent;
  let fixture: ComponentFixture<SuperadminWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
