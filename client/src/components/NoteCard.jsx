import React from 'react';


function NoteCard({ note, onEdit, onDelete }) {
    return (
      <div className="note-card">
        <h2 onClick={() => onEdit(note)}>{note.title}</h2>
        <p>{note.content}</p>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    );
  }
  

export default NoteCard;
