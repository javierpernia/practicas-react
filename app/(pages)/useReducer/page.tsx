'use client';

import { useReducer, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'DELETE'; payload: number };

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }];

    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input.trim() });
      setInput('');
    }
    console.log(todos);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Mis Tareas</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border px-2 py-1 flex-1"
          placeholder="Nueva tarea"
        />
        <button type="submit" className="bg-green-500 text-white px-3 rounded">
          Agregar
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
              className="text-red-500 ml-auto"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}