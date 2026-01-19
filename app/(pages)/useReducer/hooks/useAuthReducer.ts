
import type { UserState, UserAction } from '../types/auth';

export const initialAuthState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export function authReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };

    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, error: null };

    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload, user: null };

    case 'LOGOUT':
      return { user: null, loading: false, error: null };

    case 'UPDATE_PROFILE':
      if (!state.user) return state;
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
}