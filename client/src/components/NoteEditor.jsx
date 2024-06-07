import React, { useState, useEffect } from 'react';

function NoteEditor({ note, onCreate, onCancel, onEdit }) {
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = { title, content };
    console.log("Submitting note:", noteData);
    if (note) { // If editing an existing note
      onEdit(note._id, noteData);
    } else {
      // If creating a new note
      onCreate(noteData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div>
        <button type="submit">Save</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteEditor;
