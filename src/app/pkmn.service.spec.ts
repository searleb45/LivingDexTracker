import { TestBed } from '@angular/core/testing';

import { PkmnService } from './pkmn.service';

describe('PkmnServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PkmnService = TestBed.get(PkmnService);
    expect(service).toBeTruthy();
  });
});
