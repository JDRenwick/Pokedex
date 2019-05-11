import { TestBed } from '@angular/core/testing';

import { BioPageRetrievalService } from './bio-page-retrieval.service';

describe('BioPageRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioPageRetrievalService = TestBed.get(BioPageRetrievalService);
    expect(service).toBeTruthy();
  });
});
