import { TestBed } from '@angular/core/testing';

import { PollResolverService } from './poll-resolver.service';

describe('PollResolverService', () => {
  let service: PollResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
