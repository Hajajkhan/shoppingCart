import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotDetailComponent } from './snapshot-detail.component';

describe('SnapshotDetailComponent', () => {
  let component: SnapshotDetailComponent;
  let fixture: ComponentFixture<SnapshotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
