import { TestBed } from '@angular/core/testing';

import { MarvelRivalsService } from './marvel-rivals.service';

describe('MarvelRivalsService', () => {
  let service: MarvelRivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelRivalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
