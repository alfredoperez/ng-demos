import { EntityState } from '@ngrx/entity';

/**
 * Enumeration with all different states that
 * can be present when doing requests
 */
export const enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

/**
 * Interface to save the message of a failing request
 */
export interface ErrorState {
  errorMessage: string;
}

/**
 * Call state can be in one of the loading states or
 * have the error message
 */
export type CallState = LoadingState | ErrorState;

// Helper function to extract error, if there is one.
export function getError(callState: CallState): string | null {
  if ((callState as ErrorState).errorMessage !== undefined) {
    return (callState as ErrorState).errorMessage;
  }
  return null;
}

/**
 * Interface for all the EntityState of the application
 * Adds the call state as part of the default data when
 * using ngrx/entity
 */
export interface EntityStateModel<T> extends EntityState<T> {
  callState: CallState;
}
