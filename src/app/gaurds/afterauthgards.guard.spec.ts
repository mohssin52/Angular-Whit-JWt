import { TestBed } from '@angular/core/testing';

import { AfterauthgardsGuard } from './afterauthgards.guard';

describe('AfterauthgardsGuard', () => {
  let guard: AfterauthgardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterauthgardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
