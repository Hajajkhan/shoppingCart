import { TestBed } from '@angular/core/testing';

import { KifayatService } from './kifayat.service';

describe('KifayatService', () => {
  let service: KifayatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KifayatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
