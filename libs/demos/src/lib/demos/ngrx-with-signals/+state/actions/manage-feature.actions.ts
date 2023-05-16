import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../models/user';

export const ManageFeatureActions = createActionGroup({
  source: 'Entity Demo Page',
  events: {
    Enter: emptyProps(),
    'Add User Clicked': props<{ user: User }>(),
  },
});
