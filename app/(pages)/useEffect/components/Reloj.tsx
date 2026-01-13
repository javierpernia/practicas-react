'use client'

import { useState, useEffect } from "react";

export default function Reloj() {
  const [time, setTime] = useState<string>('');
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hora actual:", time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p className="text-4xl font-mono">{time}</p>
    </>
  );
}