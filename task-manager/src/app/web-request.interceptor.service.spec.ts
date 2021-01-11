import { TestBed } from '@angular/core/testing';

import { WebRequest.InterceptorService } from './web-request.interceptor.service';

describe('WebRequest.InterceptorService', () => {
  let service: WebRequest.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequest.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
