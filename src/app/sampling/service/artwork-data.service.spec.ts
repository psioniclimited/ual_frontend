import { TestBed, inject } from '@angular/core/testing';

import { ArtworkDataService } from './artwork-data.service';

describe('ArtworkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtworkDataService]
    });
  });

  it('should be created', inject([ArtworkDataService], (service: ArtworkDataService) => {
    expect(service).toBeTruthy();
  }));
});
