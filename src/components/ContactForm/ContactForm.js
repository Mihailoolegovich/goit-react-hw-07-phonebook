import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsReducer';
import './ContactForm.css';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { id: nanoid(), name: name, number: number };
    dispatch(addContact(data));
    setName('');
    setNumber('');
  }

  return (
    <form className="container--form" onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input
          onChange={handleChange}
          className="form__input"
          type="text"
          name="name"
          value={name}
          placeholder="Ivan Ivanovich"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="form__label">
        Number
        <input
          onChange={handleChange}
          className="form__input"
          type="tel"
          name="number"
          placeholder="xxx-xx-xx"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="form__btn" type="submit" name="button">
        Add contact
      </button>
    </form>
  );
}
