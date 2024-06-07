import React, { useState, useEffect } from 'react'
import {fetchAllNotes} from "./services/api.js"
import './App.css'

function App() {
 const [notes, setNotes] = useState([]);

 useEffect( () => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await fetchAllNotes();
        console.log(fetchedNotes);
        setNotes(fetchedNotes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotes();
 }, [])

  return (
    <div className='App'>
      <h1>My Notes</h1>
      <NoteList notes={notes} />
    </div>
  )
}

export default App
