'use client'

import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";

export const Login: React.FC = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    console.log(showPassword);

    return (
        <main className='h-screen w-screen flex items-center justify-center'>
            <form className='flex p-4 rounded-md text-white flex-col justify-center gap-y-4 w-96 h-[500px] bg-gray-900' action="#">
                <div className='flex flex-col gap-y-2 items-center'>
                    <h3 className=' font-bold text-center text-2xl'>Iniciar Sesión</h3>
                    <h4>Bienvenido de nuevo</h4>
                </div>
                <label htmlFor="email">Email</label>
                <input className=' text-black bg-white rounded-sm px-2 py-3' type="text" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <div className='relative'>
                    <button type='button' onClick={() => setShowPassword(!showPassword)}>
                        <FaEye className=' text-black absolute right-2 top-4 z-50' />
                    </button>
                    <input className=' text-black bg-white rounded-sm px-2 py-3 w-full' type="password" id="password" name="password" />
                </div>
                <button className='bg-blue-500 rounded-sm px-2 py-3' type="submit">Iniciar Sesión</button>
            </form>
        </main>
    )
}