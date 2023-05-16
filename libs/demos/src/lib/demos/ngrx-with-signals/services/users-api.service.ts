import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Companies, User } from '../models/user';

/**
 * Service to do API call to the `friends` resource.
 * NOTE: This is a mock, since there is not an API endpoint for friend
 */
@Injectable({ providedIn: 'root' })
export class UsersApiService {
  /**
   * Get list of friends for current user
   * NOTE: This is a mocked operation and returns 150 fake friends
   *       The friends are different every time
   */
  list(): Observable<Array<User>> {
    // NOTE: Uncomment the following code to simulate an error
    // return throwError(new Error('Fake error'));
    const users = [] as Array<User>;

    for (let i = 0; i < 10; i++) {
      const friend = {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        created: faker.date.between(
          new Date(2020, 4, 1),
          new Date(2020, 6, 10)
        ),
        email: faker.internet.email(),
        title: faker.name.jobTitle(),
        company: Companies[faker.datatype.number(Companies.length - 1)],
      } as User;
      users.push(friend);
    }

    return of(users).pipe(delay(1413));
  }

  /**
   * Adds a user to the collection
   * @param user - Friend to be added
   */
  add(user: User): Observable<User> {
    // NOTE: Uncomment the following code to simulate an error
    // return throwError(new Error('Fake error'));
    const newFriend = {
      ...user,
      created: new Date(Date.now()),
      id: faker.datatype.uuid(),
    };

    return of(newFriend);
  }
}
