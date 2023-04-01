import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../models/user';

export const UsersApiActions = createActionGroup({
  source: 'Users/API',
  events: {
    Load: emptyProps(),
    'Load Success': props<{ users: Array<User> }>(),
    'Load Failure': props<{ error: string }>(),
    'Add User': props<{ user: User }>(),
    'Add User Success': props<{ user: User }>(),
    'Add User Failure': props<{ error: string }>(),
  },
});
