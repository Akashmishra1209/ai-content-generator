"use client"
import { Templates } from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Formsection({ selectedTemplate, userFormInput, loading }) {
  const [formData, setFormData] = useState()
  useEffect(() => {
    console.log(selectedTemplate)
  }, [selectedTemplate])

  if (!selectedTemplate) {
    return <div>No template selected</div>
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(formData)
    userFormInput(formData)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      <Image src={selectedTemplate.icon} alt="Icon" width={70} height={70} />
      <h2 className='font-bold text-2xl text-primary mb-2'>{selectedTemplate.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate.desc}</p>
      <form onSubmit={onSubmitHandler} className='mt-6'>
        {
          selectedTemplate?.form.map((elem, index) => (
            <div key={index} className="my-2 flex flex-col gap-2 mb-2">
              <label htmlFor="" className='font-bold'>{elem.label}</label>
              {elem.field == "input" ? <Input name={elem.name} required={elem.required} onChange={handleChange} /> : elem.field == "textarea" ? <Textarea name={elem.name} required={elem.required} onChange={handleChange} /> : null
              }
            </div>
          ))}
        <Button className="w-full py-6" type="Submit" disabled={loading}>
          {loading && <Loader2Icon className='animate-spin'/>}
          Generate Content
        </Button>
      </form>
    </div>
  )
}