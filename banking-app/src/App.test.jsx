import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('adds, edits, and deletes a user', () => {
  render(<App />);
  const form = screen.getByRole('button', { name: 'Добавить' }).closest('form');
  fireEvent.change(within(form).getByLabelText('Имя'), { target: { value: 'Мария' } });
  fireEvent.change(within(form).getByLabelText('Фамилия'), { target: { value: 'Иванова' } });
  fireEvent.change(within(form).getByLabelText('E-mail'), { target: { value: 'maria@example.com' } });
  fireEvent.change(within(form).getByLabelText('Возраст'), { target: { value: '30' } });
  fireEvent.click(within(form).getByRole('button', { name: 'Добавить' }));

  expect(screen.getByText('Мария Иванова')).toBeTruthy();
  fireEvent.click(screen.getByRole('button', { name: 'Редактировать Мария' }));
  const editForm = screen.getByRole('button', { name: 'Сохранить' }).closest('form');
  fireEvent.change(within(editForm).getByLabelText('Возраст'), { target: { value: '31' } });
  fireEvent.click(within(editForm).getByRole('button', { name: 'Сохранить' }));
  expect(screen.getByText('31')).toBeTruthy();

  fireEvent.click(screen.getByRole('button', { name: 'Удалить Мария' }));
  expect(screen.queryByText('Мария Иванова')).toBeNull();
});
