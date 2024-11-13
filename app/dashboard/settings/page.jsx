import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function Settings() {
  return (
    <div className='flex items-center justify-center h-full'>
      <UserProfile/>
    </div>
  )
}
