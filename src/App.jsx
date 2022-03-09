import React, { useState } from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'
import Search from './components/Search'
import { nanoid } from 'nanoid'

const App = () => {
  
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Heading 1",
      body: "This is first note",
      date: "15/04/2018",
    },
    {
      id: nanoid(),
      title: "Heading 3",
      body: "This is second note",
      date: "30/06/2019",
    },
    {
      id: nanoid(),
      title: "Heading 3",
      body: "Lorem ipsum, dolor sit amet consectetur.",
      date: "20/09/2020",
    },
    {
      id: nanoid(),
      title: "Heading 3",
      body: "This is third note",
      date: "20/09/2020",
    },
  ])

  function addNote(title,body) {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      title: title,
      body: body,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div>
      {/* Header Here */}
      <Header />
      {/* Search Bar Here */}
      <Search />
      {/* Notes List Here */}
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App