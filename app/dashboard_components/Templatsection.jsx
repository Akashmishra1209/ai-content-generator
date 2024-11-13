import {Templates} from '@/app/(data)/Templates'
import React from 'react'
import Templatecard from './Templatecard'

export default function Templatsection() {
  return (
    <div>
      {Templates.map((elem, index) => (
        <Templatecard key={index} {...elem} />
      ))}
    </div>
  )
}
