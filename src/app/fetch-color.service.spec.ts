import { TestBed } from '@angular/core/testing';

import { FetchColorService } from './fetch-color.service';

describe('FetchColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchColorService = TestBed.get(FetchColorService);
    expect(service).toBeTruthy();
  });
});
