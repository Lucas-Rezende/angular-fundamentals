import { TestBed } from '@angular/core/testing';

import { ScreenLoopService } from './screen-loop.service';

describe('ScreenLoopService', () => {
  let service: ScreenLoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenLoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
