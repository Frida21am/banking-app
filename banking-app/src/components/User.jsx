import React, { useState } from 'react';
import AddUser from './AddUser';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

function User({ user, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="user">
      <button type="button" className="icon-button delete-icon" aria-label={`Удалить ${user.first_name}`} onClick={() => onDelete(user.id)}>
        <IoCloseCircleSharp />
      </button>
      <button type="button" className="icon-button edit-icon" aria-label={`Редактировать ${user.first_name}`} onClick={() => setEditing((value) => !value)}>
        <IoHammerSharp />
      </button>
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <p>{user.age}</p>
      {editing && <AddUser user={user} onSubmit={onEdit} onCancel={() => setEditing(false)} />}
    </div>
  );
}

export default User;
