import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/contactsReducer';
import { nanoid } from 'nanoid';
import './ContactListItem.css';

export default function ContactListItem() {
  const dispatch = useDispatch();

  const contactsList = useSelector(state => state.contacts.items);
  const filterName = useSelector(state => state.contacts.filter);

  const filterList = contactsList.filter(el =>
    el.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <>
      {filterList.map(({ id, name, number }) => (
        <li key={nanoid()} className="contacts__li" id={id}>
          <div className="contacts__data">
            <p className="contacts__name">{name}: </p>
            <p className="contacts__number">{number}</p>
          </div>
          <button
            className="contacts__btn"
            type="button"
            onClick={() => {
              dispatch(removeContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
