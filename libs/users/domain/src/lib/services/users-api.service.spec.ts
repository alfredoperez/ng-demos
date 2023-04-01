import { TestBed } from '@angular/core/testing';
import { UsersApiService } from './users-api.service';

describe('UsersApiService', () => {
  let service: UsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UsersApiService] });
    service = TestBed.inject(UsersApiService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should generate 150 fake friends', async () => {
      const result = await service.list().toPromise();
      expect(result).toHaveLength(150);
    });
  });
});
