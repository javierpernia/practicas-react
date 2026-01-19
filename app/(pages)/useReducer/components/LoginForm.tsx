// MODELO DE LOGINFORM PARA EL EJEMPLO DE USO DE REDUCER
'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { login } from '../lib/api';

export default function LoginForm() {
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const user = await login(cedula, password);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      router.push('/dashboard');
    } catch (err: any) {
      dispatch({ type: 'LOGIN_ERROR', payload: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs, botones, mensajes de error... */}
    </form>
  );
}