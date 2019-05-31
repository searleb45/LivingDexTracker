import { TestBed } from '@angular/core/testing';

import { LivingDexService } from './living-dex.service';

describe('LivingDexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivingDexService = TestBed.get(LivingDexService);
    expect(service).toBeTruthy();
  });
});
