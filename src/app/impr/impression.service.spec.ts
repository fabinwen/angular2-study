/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImpressionService } from './impression.service';

describe('Service: Impression', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImpressionService]
    });
  });

  it('should ...', inject([ImpressionService], (service: ImpressionService) => {
    expect(service).toBeTruthy();
  }));
});
