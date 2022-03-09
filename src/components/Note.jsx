import React from 'react'
import { CgCloseR } from 'react-icons/cg'

const Note = (props) => {
    return (
        <div>
            <div className='flex flex-col justify-between block rounded-lg bg-white dark:bg-gray-800 shadow-lg h-64'>
                <div>
                    <div className='py-4 px-6 border-b border-gray-400 flex justify-between items-center'>
                        <div class="text-gray-900 dark:text-gray-200 text-xl font-medium">
                            {props.title}
                        </div>
                        <CgCloseR onClick={()=> props.handleDeleteNote(props.id)} className='text-xl cursor-pointer' />
                    </div>
                    <div className='overflow-y-auto'>
                        <div class="px-6 h-32">
                            <p class="py-2 text-gray-700 dark:text-gray-400 text-base whitespace-pre">
                                {props.body}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-3 px-6 border-t border-gray-400 text-sm border-gray-300 text-gray-600">
                    {props.date}
                </div>
            </div>
        </div>
    )
}

export default Note

