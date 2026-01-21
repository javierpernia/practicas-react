'use client';

import { useEffect, useRef, useState } from "react";


export default function TypingTimer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimerRef = useRef<number | null>(null);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0); // en segundos

  useEffect(() => {
    // Enfocar al cargar
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = () => {
    let timeoutTimer: number = 1000;

    if (!isTyping) {
      setIsTyping(true);
      startTimerRef.current = Date.now();
    }

    // Reiniciar timeout cada vez que escribes
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      // Despues de dejar de escribir
      if (startTimerRef.current) {
        const endTime = Date.now();
        const timeSpent = (endTime - startTimerRef.current) / 1000;
        setTotalTime(prev => prev + timeSpent);
        setIsTyping(false);
        startTimerRef.current = null;
      }
    }, timeoutTimer); // ← 1. Espera 1 segundo antes de contar
  }
  // intentar corregir la desviacion del tiempo con onBlur
  const handleBlur = () => {
    if (startTimerRef.current) {
      const elapsed = (Date.now() - startTimerRef.current) / 1000;
      setTotalTime(prev => prev + elapsed);
      setIsTyping(false);
      startTimerRef.current = null;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const reset = () => {
    setIsTyping(false);
    setTotalTime(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    startTimerRef.current = null;
    inputRef.current?.focus();
  }

  return (
    <div className="p-6 text-center max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Typing Timer</h2>
      <p className="mb-2">
        {isTyping ? 'Escribe ⌨️' : 'Detenido 🛑'}
      </p>
      <p className="mb-2">Tiempo total: <span className="font-bold">{totalTime.toFixed(1)} segundos</span></p>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="border px-2 py-1 mb-4"
        placeholder="Escribe algo..."
      />
      <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
    </div>
  );
}

