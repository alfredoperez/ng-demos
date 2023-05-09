import { Injectable } from '@angular/core';
import { SignalsSimpleStoreService } from './signals-simple-store.service';

export interface UserState {
  name: string;
  company: string;
  address: string;
}
@Injectable()
export class UserSignalsStateService extends SignalsSimpleStoreService<UserState> {
  constructor() {
    super();
  }
}
