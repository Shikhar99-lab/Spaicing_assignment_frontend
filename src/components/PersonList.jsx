import React from 'react';

const PersonList = ({ people, onDelete, onEdit }) => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name}
          <button onClick={() => onEdit(person, prompt('New name:'))}>Edit</button>
          <button onClick={() => onDelete(person)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
