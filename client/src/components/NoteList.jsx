import React from  "react"
import NoteCard from "./NoteCard"

const NoteList = ({notes}) => {
    return(
        <div className="note-list">
            {notes.map((note) => (
                <NoteCard key={note._id} />
            ))}
        </div>
    )
}

export default NoteList