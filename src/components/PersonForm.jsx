import React, { useState } from 'react';

const PersonForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default PersonForm;
