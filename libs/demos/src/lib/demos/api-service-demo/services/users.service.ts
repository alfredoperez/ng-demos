import { Injectable } from '@angular/core';
import { User } from '../models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UsersService extends ApiService<User> {
  constructor() {
    super('users');
  }
}
