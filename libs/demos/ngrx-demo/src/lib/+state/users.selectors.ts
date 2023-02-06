import { getError, LoadingState } from '@ngrx-demos-shared';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, usersFeature, UsersState } from './users.reducer';
// Lookup the 'Users' feature state managed by NgRx

/**
 * Selector for the Feature State of 'Users
 */
export const selectUsersState = createFeatureSelector<UsersState>(
  usersFeature.name
);

/**
 * Selectors from the entity
 */
export const { selectAll: selectAllUsers } = adapter.getSelectors(
  selectUsersState as any
);

/**
 * Selector for a flag that indicates if there is an API request in progress
 */
export const selectIsLoading = createSelector(
  selectUsersState,
  (state) => state.callState === LoadingState.LOADING
);

/**
 * Selector for a flag that indicates if data has been loaded
 */
export const selectIsLoaded = createSelector(
  selectUsersState,
  (state) => state.callState === LoadingState.LOADED
);

/**
 * Selector for  the error message
 */
export const selectError = createSelector(selectUsersState, (state) =>
  getError(state.callState)
);

export const selectTotalUsersCurrentMonth = createSelector(
  selectAllUsers,
  (users) => {
    const currentMonth = new Date().getMonth();

    return users.filter((user) => user.created.getUTCMonth() === currentMonth)
      .length;
  }
);

export const selectTotalUsersPreviousMonth = createSelector(
  selectAllUsers,
  (users) => {
    const previousMonth = new Date().getUTCMonth() - 1;
    return users.filter((user) => user.created.getUTCMonth() === previousMonth)
      .length;
  }
);

export const selectUserAcquisitionDifference = createSelector(
  selectTotalUsersCurrentMonth,
  selectTotalUsersPreviousMonth,
  (totalCurrentMonth, totalPreviousMonth) => {
    return (totalCurrentMonth * 100) / totalPreviousMonth;
  }
);
