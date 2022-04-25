import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpaymentmethodComponent } from './cartpaymentmethod.component';

describe('CartpaymentmethodComponent', () => {
  let component: CartpaymentmethodComponent;
  let fixture: ComponentFixture<CartpaymentmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpaymentmethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpaymentmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
