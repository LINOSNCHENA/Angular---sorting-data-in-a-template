import { TestBed } from '@angular/core/testing';

import { DinnersService } from './dinners.service';

describe('DinnersService', () => {
  let service: DinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
