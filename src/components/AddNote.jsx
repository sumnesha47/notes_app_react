import React, { useState } from 'react'

const AddNote = (props) => {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteBody, setNoteBody] = useState("")
    const characterLimit = 200;

    const handleTitleChange = (event) => {
        setNoteTitle(event.target.value)
    }
    const handleBodyChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteBody(event.target.value)
        }
    }
    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0 && noteBody.trim().length > 0) {
            props.handleAddNote(noteTitle, noteBody)
            setNoteTitle("")
            setNoteBody("")
        }
    }

    return (
        <div className='flex flex-col justify-between shadow-lg rounded-lg bg-indigo-300 h-64'>
            <div>
                <input type="text" onChange={handleTitleChange} value={noteTitle} className='placeholder:text-gray-600 w-full mt-2 py-4 px-6 text-xl font-medium focus:outline-none bg-indigo-300' placeholder='Title' />
                <textarea onChange={handleBodyChange} value={noteBody} className='placeholder:text-gray-600 px-6 bg-indigo-300 hover:outline-none focus:outline-none resize-none' cols="30" rows="4" placeholder='Type to add a note....'></textarea>
            </div>
            <div className="flex items-center justify-between py-2 px-6 border-t text-sm border-gray-300 text-gray-600">
                <p className="text-sm">{characterLimit - noteBody.length} Remaining</p>
                <button onClick={handleSaveClick} className='bg-indigo-100 py-1 px-4 rounded-3xl hover:bg-indigo-200'>save</button>
            </div>
        </div>
    )
}

export default AddNote