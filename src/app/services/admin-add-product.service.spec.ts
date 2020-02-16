/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminAddProductService } from './admin-add-product.service';

describe('AdminAddProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddProductService]
    });
  });

  it('should ...', inject([AdminAddProductService], (service: AdminAddProductService) => {
    expect(service).toBeTruthy();
  }));
});
