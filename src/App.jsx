import React, { useState, useEffect } from 'react'
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
  ])
  const [searchText, setSearchText] = useState("")

  function addNote(title, body) {
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
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-app-react-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('notes-app-react-data',
      JSON.stringify(notes))
  }, [notes])


  return (
    <div>
      {/* Header Here */}
      <Header />
      {/* Search Bar Here */}
      <Search handleSearchNote={setSearchText} />
      {/* Notes List Here */}
      <NotesList
        notes={notes.filter((note) => (note.title.toLowerCase().includes(searchText) || note.body.toLowerCase().includes(searchText)))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App