'use client';

import { useTheme } from './themes/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6 text-center">
      <p>Tema actual: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded border border-purple-600"
      >
        Cambiar tema
      </button>
    </div>
  );
}