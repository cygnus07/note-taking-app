import React from "react"

const NoteCard = ({note}) => {
    return(
        <div className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    )
}

export default NoteCard