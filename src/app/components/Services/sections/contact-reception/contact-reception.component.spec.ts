import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReceptionComponent } from './contact-reception.component';

describe('ContactReceptionComponent', () => {
  let component: ContactReceptionComponent;
  let fixture: ComponentFixture<ContactReceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactReceptionComponent]
    });
    fixture = TestBed.createComponent(ContactReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
