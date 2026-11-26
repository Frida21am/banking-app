import React, { useState } from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import initialUsers from './data';

function App() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (fields) => {
    setUsers((current) => [
      ...current,
      { ...fields, id: Math.max(0, ...current.map((user) => user.id)) + 1 },
    ]);
  };

  const editUser = (updated) => {
    setUsers((current) => current.map((user) => user.id === updated.id ? updated : user));
  };

  const deleteUser = (id) => {
    setUsers((current) => current.filter((user) => user.id !== id));
  };

  return (
    <>
      <Header title="Список пользователей" />
      <main>
        <Users users={users} onEdit={editUser} onDelete={deleteUser} />
      </main>
      <aside>
        <h2>Добавить пользователя</h2>
        <AddUser onSubmit={addUser} />
      </aside>
    </>
  );
}

export default App;
