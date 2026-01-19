// MODELO DE API PARA EL EJEMPLO DE USO DE REDUCER

export async function login(cedula: string, password: string) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cedula, password }),
  });
  if (!res.ok) throw new Error('Credenciales inválidas');
  return res.json();
}

export async function getCurrentUser() {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('No autenticado');
  return res.json();
}