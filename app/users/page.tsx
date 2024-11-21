import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store',
    });
    const usersData: User[] = await users.json();

  return (
    <>
        <p>{new Date().toLocaleTimeString()}</p>
        <h1>Users</h1>
        <ul>
            {usersData.map((user: User) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </>
  )
}

export default UsersPage