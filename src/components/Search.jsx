import React from 'react'

const Search = (props) => {
    return (
        <div className='container mt-4'>
            <input onChange={(event)=> props.handleSearchNote(event.target.value)} type="text" placeholder='Search Note Here....' className='w-full border p-3 rounded' />
        </div>
    )
}

export default Search