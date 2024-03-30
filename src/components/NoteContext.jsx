import React, { createContext, useState, useEffect, useContext } from 'react';

const NoteContext = createContext();

export const useNoteContext = () => {
  return useContext(NoteContext);
};

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
