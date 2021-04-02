import { TestBed } from '@angular/core/testing';

import { PersonCardService } from './person-card.service';

describe('PersonCardService', () => {
  let service: PersonCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
