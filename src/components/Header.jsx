import React from 'react'

const Header = () => {
    return (
        <div className="shadow">
            <div className='container py-4'>
                <header className='flex justify-between'>
                    <h1 className='text-2xl'><span className='text-indigo-300'>React</span>Notes</h1>
                    <div className='flex items-center'>
                        <p className='text-xs font-semibold'>Light</p>
                        <div className='w-7 h-3.5 rounded-3xl bg-black mx-2 cursor-pointer flex justify-start items-center border border-black box-content'>
                            <div className='w-3.5 h-3.5 bg-white rounded-full'></div>
                        </div>
                        <p className='text-xs font-semibold'>Dark</p>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header