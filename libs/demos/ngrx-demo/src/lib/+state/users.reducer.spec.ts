import { UsersEntity } from './users.models';

describe('Users Reducer', () => {
  const createUsersEntity = (id: string, name = ''): UsersEntity => ({
    id,
    name: name || `name-${id}`,
  });
});
