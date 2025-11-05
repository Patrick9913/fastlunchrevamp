import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className='h-screen bg-gray-800 flex justify-start items-center px-12'>
            <div className='flex flex-col gap-y-4'>
                <h1 className=' text-white text-5xl font-bold'>Hola Mundo</h1>
                <p className=' text-white text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <button className='bg-white text-black px-4 py-2 rounded-md'>Comprar</button>
            </div>
            
        </header>
    )
}