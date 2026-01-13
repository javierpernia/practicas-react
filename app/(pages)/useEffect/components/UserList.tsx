'use client'
/* useEffect PARA CARGAR DATOS CON FETCH */
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res?.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })    
    ; */

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error al cargar datos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center p-6">Cargando...</p>;
  if (error) return <p className="text-center p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Usuarios</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border-b pb-2">
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}