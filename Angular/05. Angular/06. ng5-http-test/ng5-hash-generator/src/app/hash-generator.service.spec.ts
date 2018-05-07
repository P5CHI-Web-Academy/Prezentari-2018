import { TestBed, inject } from '@angular/core/testing';

import { HashGeneratorService } from './hash-generator.service';

describe('HashGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashGeneratorService]
    });
  });

  it('should be created', inject([HashGeneratorService], (service: HashGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
