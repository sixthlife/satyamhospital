import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDoctorsComponent } from './service-doctors.component';

describe('ServiceDoctorsComponent', () => {
  let component: ServiceDoctorsComponent;
  let fixture: ComponentFixture<ServiceDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDoctorsComponent]
    });
    fixture = TestBed.createComponent(ServiceDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
