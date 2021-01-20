import { TestBed, inject } from '@angular/core/testing';

import { MoiveServiceService } from './moive-service.service';

describe('MoiveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoiveServiceService]
    });
  });

  it('should be created', inject([MoiveServiceService], (service: MoiveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
