import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormDetailsComponent } from './customer-form-details.component';

describe('CustomerFormDetailsComponent', () => {
  let component: CustomerFormDetailsComponent;
  let fixture: ComponentFixture<CustomerFormDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFormDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});