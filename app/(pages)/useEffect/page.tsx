'use client'
import Time from "./components/Reloj";
import UserList from "./components/UserList";

export default function UseEffectPage() {


  return (
    <>
      <div className="text-center p-6">
        <h2 className="text-2xl mb-4">Reloj</h2>
        <Time />
      </div>
      <UserList />
    </>

  );
}