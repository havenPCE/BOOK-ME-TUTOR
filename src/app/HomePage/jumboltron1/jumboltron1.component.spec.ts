import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumboltron1Component } from './jumboltron1.component';

describe('Jumboltron1Component', () => {
  let component: Jumboltron1Component;
  let fixture: ComponentFixture<Jumboltron1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumboltron1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumboltron1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
