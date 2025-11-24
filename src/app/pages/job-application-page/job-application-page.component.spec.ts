import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationPageComponent } from './job-application-page.component';

describe('JobApplicationPageComponent', () => {
  let component: JobApplicationPageComponent;
  let fixture: ComponentFixture<JobApplicationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobApplicationPageComponent]
    });
    fixture = TestBed.createComponent(JobApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
