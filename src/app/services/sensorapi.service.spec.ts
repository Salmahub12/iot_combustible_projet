import { TestBed } from '@angular/core/testing';

import { SensorapiService } from './sensorapi.service';

describe('SensorapiService', () => {
  let service: SensorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
