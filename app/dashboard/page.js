"use client"
import React, { useState } from 'react'
import Searchsection from './_components/Searchsection'
import Templatsection from './_components/Templatsection'

export default function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState()
  return (
    <div>
      <Searchsection onSearchInput={(value)=>setUserSearchInput(value)}/>
      <Templatsection searchInput={userSearchInput}/>
    </div>
  )
}
