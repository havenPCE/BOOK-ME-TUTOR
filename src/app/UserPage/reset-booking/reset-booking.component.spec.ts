import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetBookingComponent } from './reset-booking.component';

describe('ResetBookingComponent', () => {
  let component: ResetBookingComponent;
  let fixture: ComponentFixture<ResetBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
