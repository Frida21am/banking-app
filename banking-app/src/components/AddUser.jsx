import React, { useState } from 'react';

const emptyUser = { first_name: '', last_name: '', email: '', age: '' };

function AddUser({ user, onSubmit, onCancel }) {
  const [fields, setFields] = useState(user ?? emptyUser);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      ...fields,
      first_name: fields.first_name.trim(),
      last_name: fields.last_name.trim(),
      email: fields.email.trim(),
      age: Number(fields.age),
    });
    if (!user) setFields(emptyUser);
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" placeholder="Имя" aria-label="Имя" value={fields.first_name} onChange={handleChange} required />
      <input name="last_name" placeholder="Фамилия" aria-label="Фамилия" value={fields.last_name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" aria-label="E-mail" value={fields.email} onChange={handleChange} required />
      <input name="age" type="number" min="1" placeholder="Возраст" aria-label="Возраст" value={fields.age} onChange={handleChange} required />
      <button type="submit">{user ? 'Сохранить' : 'Добавить'}</button>
      {onCancel && <button type="button" onClick={onCancel}>Отмена</button>}
    </form>
  );
}

export default AddUser;
