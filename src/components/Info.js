import React from 'react'

export default function Info() {
  return (
    <div className="bg-gray-600 shadow-3xl">
        <div className="container mx-auto max-w-8xl bg-blue-700 grid md:grid-cols-3 gap-4 px-4 py-6 text-white">
            
            <div className="w-full space-y-3 flex-col border border-white rounded-lg shadow-2xl py-5 text-left px-3 hover:scale-105 duration-200">
            <h1 className="font-bold text-xl">Email</h1>
            <p>damienaime32@gmail.com</p>
            </div>

            <div className="w-full space-y-3 flex-col border border-white rounded-lg shadow-2xl py-5 text-left px-3 hover:scale-105 duration-200">
            <h1 className="font-bold text-xl">Github</h1>
            <p>damienaime32@gmail.com</p>
            </div>

            <div className="w-full space-y-3 flex-col border border-white rounded-lg shadow-2xl py-5 text-left px-3 hover:scale-105 duration-200">
            <h1 className="font-bold text-xl">Phone Number</h1>
            <p>+229 0197495591</p>
            </div>

        </div>

        
   </div>
  )
}
