'use client';

import { useState } from 'react';

interface User {
    name: string;
    age: number;
    email: string;
}

export default function UseStatePage() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [users, setUsers] = useState<string[]>([]);
    const [usersVals, setUsersVals] = useState<string>('');
    const [user, setUser] = useState<User>({
        name: '',
        age: 0,
        email: '',
    });



    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button><br />
            <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>Sub</button>

            <p>Nombre: {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <p>Users: {users.join(', ')}</p>
            <input type="text" value={usersVals} id="users" onChange={(e) => setUsersVals(e.target.value)} />
            <button
                onClick={() => {
                    if (usersVals.trim()) {
                        setUsers([...users, usersVals]);
                        setUsersVals(''); // ← esto limpia el input
                    }
                }}
            >
                Add user
            </button>
            <button onClick={() => setUsers([])}>Clear</button>

            <p>User: {user.name}</p>
            <input type="text" value={user.name} id="username" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <button onClick={() => setUser({ name: '', age: 0, email: '' })}>Clear</button>
        </div>
    );
}
