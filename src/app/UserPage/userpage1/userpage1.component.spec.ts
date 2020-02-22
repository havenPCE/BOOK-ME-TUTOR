import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userpage1Component } from './userpage1.component';

describe('Userpage1Component', () => {
  let component: Userpage1Component;
  let fixture: ComponentFixture<Userpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
