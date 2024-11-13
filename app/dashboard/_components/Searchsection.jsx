import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Searchsection({onSearchInput}) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What Would You Like To Create Today ?</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white mt-50 w-[50%]'>
          <SearchIcon className='text-primary'/>
          <input type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black' onChange={(event)=>onSearchInput(event.target.value)}/>
        </div>
      </div>
    </div>
  )
}