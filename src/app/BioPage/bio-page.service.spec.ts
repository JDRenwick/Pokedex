import { TestBed } from '@angular/core/testing';

import { BioPageService } from './bio-page.service';

describe('BioPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioPageService = TestBed.get(BioPageService);
    expect(service).toBeTruthy();
  });
});
