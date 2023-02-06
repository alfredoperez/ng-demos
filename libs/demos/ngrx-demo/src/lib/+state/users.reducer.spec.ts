import { Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';
import { UsersState, initialUsersState, usersReducer } from './users.reducer';

describe('Users Reducer', () => {
  const createUsersEntity = (id: string, name = ''): UsersEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Users actions', () => {
    it('loadUsersSuccess should return the list of known Users', () => {
      const users = [
        createUsersEntity('PRODUCT-AAA'),
        createUsersEntity('PRODUCT-zzz'),
      ];
      const action = UsersActions.loadUsersSuccess({ users });

      const result: UsersState = usersReducer(initialUsersState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = usersReducer(initialUsersState, action);

      expect(result).toBe(initialUsersState);
    });
  });
});
