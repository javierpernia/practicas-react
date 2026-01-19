'use client';

import LoginForm from './components/LoginForm';
import TodoApp from './components/TodoList';


export default function UseReducerPage() {
  return (
    <>
      <TodoApp />
      <br />
      <LoginForm />
    </>
  );
}