import React, { useEffect, useState } from 'react'
import Templatecard from './Templatecard';
import { Templates } from '@/app/(data)/Templates';

export default function Templatsection({searchInput}) {
    const [templateList, setTemplateList] = useState(Templates)
    useEffect(() => {
        if(searchInput){
            const filterData = Templates.filter((tool) => 
                tool.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            setTemplateList(filterData)
        }
        else{
            setTemplateList(Templates)
        }
    }, [searchInput])
    
  return (
    <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {templateList.map((elem,index)=>(
        <Templatecard key={index} {...elem}/>
      ))}
    </div>
  )
}