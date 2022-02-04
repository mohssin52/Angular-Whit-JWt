import { TestBed } from '@angular/core/testing';

import { AuthgardsGuard } from './authgards.guard';

describe('AuthgardsGuard', () => {
  let guard: AuthgardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
