import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import PersonForm from './PersonForm';

const FamilyTree = () => {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/people');
        setPeople(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await axios.get('/api/people');
      setPeople(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddPerson = async (name) => {
    try {
      const response = await axios.post('/api/people', { name });
      setPeople([...people, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditPerson = async (person, newName) => {
    try {
      const response = await axios.put(`/api/people/${person.id}`, { name: newName });
      setPeople(people.map((p) => (p.id === person.id ? response.data : p)));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeletePerson = async (person) => {
    try {
      await axios.delete(`/api/people/${person.id}`);
      setPeople(people.filter((p) => p.id !== person.id));
    } catch (error) {
      setError(error.message);
    }
  };
  
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <PersonList people={people} onDelete={handleDeletePerson} onEdit={handleEditPerson} />
          <PersonForm onSubmit={handleAddPerson} />
        </>
      )}
    </div>
  );
};



export default FamilyTree;
