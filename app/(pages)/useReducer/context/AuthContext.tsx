// src/context/AuthContext.tsx
'use client';

import { createContext, useContext, ReactNode, useReducer } from 'react';
import { initialAuthState, authReducer } from '../hooks/useAuthReducer';
import { UserState, UserAction } from '../types/auth';

type AuthContextType = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};

const AuthContext = createContext<AuthContextType>({
  state: initialAuthState,
  dispatch: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);