import React from 'react'

const Search = (props) => {
    return (
        <div className='container mt-4 px-6'>
            <input onChange={(event)=> props.handleSearchNote(event.target.value)} type="text" 
            placeholder='Search Note Here....' className='w-full border p-3 rounded dark:bg-gray-800 border-none' />
        </div>
    )
}

export default Search