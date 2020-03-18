import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPageHeaderComponent } from './tutor-page-header.component';

describe('TutorPageHeaderComponent', () => {
  let component: TutorPageHeaderComponent;
  let fixture: ComponentFixture<TutorPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
