interface User {
  id: number;
  name: string;
  email: string;
}

type UserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

type UserAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: Partial<User> };


export type { User, UserState, UserAction };