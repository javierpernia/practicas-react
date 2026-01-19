'use client';

import { useRef, useState, useEffect } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null); // ← 1. Crea una "caja" para guardar el input
  const renderCount = useRef(0);                  // ← 2. Crea una "caja" para contar renders
  const [name, setName] = useState('');

  useEffect(() => {
    renderCount.current += 1;          // ← 3. Aumenta el contador (sin re-render)
    inputRef.current?.focus();         // ← 4. Enfoca el input automáticamente
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">useRef Ejemplo</h2>
      <input
        ref={inputRef}                 // ← 5. Conecta el input a la "caja"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border px-2 py-1 mb-4"
        placeholder="Escribe tu nombre"
      />
      <p>Renderizaciones: {renderCount.current}</p>  // ← 6. Muestra el valor actual
      <p>Hola, {name || 'anonimo'}!</p>
    </div>
  );
}