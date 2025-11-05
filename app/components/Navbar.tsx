import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav className=' h-20 bg-gray-400 flex justify-between items-center px-6'>
            <h1 className='text-2xl font-bold'>Logo</h1>
            <ul className='flex gap-x-5 *:underline *:underline-offset-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Products</li>
            </ul>
        </nav>
    )
}