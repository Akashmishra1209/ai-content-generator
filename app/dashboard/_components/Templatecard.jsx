"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Templatecard(elem) {    
  return (
    <Link href={`/dashboard/content/${elem?.slug}`}>
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
      <Image src={elem.icon} alt="Icon" width={50} height={50}/>
      <h2 className='font-medium text-lg'>{elem.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{elem.desc}</p>
    </div>
    </Link>
  )
}