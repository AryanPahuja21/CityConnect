import React from 'react'
import Cover from '../assets/crime.jpg'
import { Link } from 'react-router-dom'

const Crime = () => {
  return (
    <div className="grid grid-cols-2 items-center mx-24 gap-[15vw]">
        <div className='w-[40vw] my-20'>
            <img className='w-full rounded-2xl' src={Cover} alt="" />
        </div>
        <div>
      <h1 className='text-7xl font-extrabold'>Facing Injustice?</h1>
      <h1 className='text-5xl font-semibold'>Report a Crime Here</h1>
      <p className='text-2xl my-14 font-semibold'>If this is an emergeny, Call 112 immediately.</p>
      <Link to='/crime/report'><button className='bg-blue-900 text-white p-5 font-bold text-2xl rounded'>Report a Crime</button></Link>

        </div>
    </div>
  )
}

export default Crime
