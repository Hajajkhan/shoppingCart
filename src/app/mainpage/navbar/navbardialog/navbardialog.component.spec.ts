import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardialogComponent } from './navbardialog.component';

describe('NavbardialogComponent', () => {
  let component: NavbardialogComponent;
  let fixture: ComponentFixture<NavbardialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
