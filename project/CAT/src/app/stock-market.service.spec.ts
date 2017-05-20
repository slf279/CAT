import { TestBed, inject } from '@angular/core/testing';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockMarketService]
    });
  });

  it('should be created', inject([StockMarketService], (service: StockMarketService) => {
    expect(service).toBeTruthy();
  }));
});
