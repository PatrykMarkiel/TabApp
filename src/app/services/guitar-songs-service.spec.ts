import { TestBed } from '@angular/core/testing';
import { GuitarTabsService } from './guitar-tabs-service';


describe('GuitarTabsService', () => {
  let service: GuitarTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
