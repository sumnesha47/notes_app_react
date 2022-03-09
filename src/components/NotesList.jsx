import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = (props) => {
    return (
        <div className='mb-4'>
            <div className='container mt-4 grid grid-cols-3 gap-4'>
                {props.notes.map((note) => <Note handleDeleteNote={props.handleDeleteNote} key={note.id} id={note.id} title={note.title} body={note.body} date={note.date} />)}
                <AddNote handleAddNote={props.handleAddNote}/>
            </div>
        </div>
    )
}

export default NotesList