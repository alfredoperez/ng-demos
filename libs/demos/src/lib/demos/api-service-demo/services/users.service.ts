import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { ApiService } from './api.service';

interface Hero {
  name: string;
  power: string;
  id: number;
  occupation: string;
}

interface Task {
  name: string;
  description: string;
  id: number;
  userId: number;
}
@Injectable({ providedIn: 'root' })
export class UsersApiService extends ApiService<User> {
  constructor() {
    super('users');
  }

  getHeroes(): Observable<Hero[]> {
    return this.request<Hero[]>('GET', {
      url: 'https://api.example.com/heroes',
    });
  }

  getHero(id: number): Observable<Hero> {
    return this.request<Hero>('GET', {
      url: `https://api.example.com/heroes/${id}`,
    });
  }

  getUserTasks(userId: number): Observable<Array<Task>> {
    return this.request<Array<Task>>('GET', {
      url: `https://api.example.com/users/${userId}/tasks`,
    });
  }
}
