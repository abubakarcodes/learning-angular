import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormArrayComponent } from './course-form-array.component';

describe('CourseFormArrayComponent', () => {
  let component: CourseFormArrayComponent;
  let fixture: ComponentFixture<CourseFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
