import React, { useState, useEffect } from 'react';
import { fetchAllNotes, createNote, updateNote } from './services/api';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await fetchAllNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, []);

  const handleCreateNote = async (newNoteData) => {
    try {
      const createdNote = await createNote(newNoteData);
      setNotes([createdNote, ...notes]);
      setShowNoteEditor(false);
      setSelectedNote(null); // Clear selected note
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleUpdateNote = async (id, updatedNoteData) => {
    try {
      const updatedNote = await updateNote(id, updatedNoteData);
      setNotes(notes.map((note) => (note._id === id ? updatedNote : note)));
      setShowNoteEditor(false);
      setSelectedNote(null); // Clear selected note
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setShowNoteEditor(true);
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id); // Call the deleteNote function from api.js
      setNotes(notes.filter((note) => note._id !== id)); // Update the notes state
    } catch (error) {
      console.error('Error deleting note:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <button onClick={() => setShowNoteEditor(true)}>Create New Note</button>
      {showNoteEditor && (
        <NoteEditor
          onCreate={handleCreateNote}
          onCancel={() => setShowNoteEditor(false)}
          note={selectedNote}
          onEdit={handleUpdateNote}
        />
      )}
<NoteList notes={notes} onEdit={handleEdit} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;
