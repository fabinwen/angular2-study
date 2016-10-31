/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooklistService } from './booklist.service.ts';

describe('Service: Booklist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooklistService]
    });
  });

  it('should ...', inject([BooklistService], (service: BooklistService) => {
    expect(service).toBeTruthy();
  }));
});
