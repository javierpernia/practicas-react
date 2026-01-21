import LoginForm from './components/LoginForm';
import TodoApp from './components/TodoList';


export default function UseReducerPage() {
  return (
    <>
      <h1>UseReducer</h1>
      <p>Con useState, esa lógica se reparte en varias funciones (addTodo, toggleTodo, deleteTodo).
        Con useReducer, esa lógica se centraliza en una sola función (todoReducer).</p>
      <TodoApp />
      <br />
      <LoginForm />
    </>
  );
}