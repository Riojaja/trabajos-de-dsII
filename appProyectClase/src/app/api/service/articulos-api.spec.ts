import { TestBed } from '@angular/core/testing';

import { ArticulosApi } from './articulos-api';

describe('ArticulosApi', () => {
  let service: ArticulosApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulosApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
