import { TestBed } from '@angular/core/testing';

import { SuperficiesService } from './superficies.service';

describe('SuperficiesService', () => {
  let service: SuperficiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperficiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
