import React from 'react'
import FilterButtons from '../FilterButtons'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Gender({setGender,setPageNumber}) {
    let gender = ['Male','Female']
    let [value,setValue] =useState("")
    useEffect(()=>
    {
        setPageNumber(1)
    },[value])
  return (
    
    <div className='d-block  p-3'>
{ setGender(value)}

        {
           
            gender.map((items,index)=>
            {
                return(
                    <div ><FilterButtons key={index} items={items} index={index} value={value} setValue={setValue} /></div>
                )
            }
            )
        }

       

    </div>
  )
}
