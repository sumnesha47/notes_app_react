import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className="shadow bg-white dark:shadow-none dark:bg-gray-800">
            <div className='container py-4 px-6'>
                <header className='flex justify-between'>
                    <h1 className='text-2xl dark:text-white'><span className='text-indigo-600'>React</span>Notes</h1>
                    <div className='flex items-center'>
                        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='w-7 h-3.5 rounded-3xl bg-black dark:bg-white cursor-pointer flex justify-start items-center p-1 box-content'>
                            <div className='w-3.5 h-3.5 bg-white rounded-full dark:bg-black block dark:ml-auto'></div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header