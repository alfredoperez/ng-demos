import { User } from '@ngrx-demos-shared';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const DemoPageActions = createActionGroup({
  source: 'Entity Demo Page',
  events: {
    Enter: emptyProps(),
    'Add User Clicked': props<{ user: User }>(),
  },
});

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
