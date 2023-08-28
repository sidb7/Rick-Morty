import React from 'react'
import FilterButtons from '../FilterButtons'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Status({setStatus,setPageNumber,reset}) {
    let status = ['Alive','Dead','Unknown']
    let [value,setValue] =useState("")
    useEffect(()=>
    {
        setPageNumber(1)
    },[value])
  return (
    <div className='d-block  p-3'>
        {setStatus(value)}
      
        {
            status.map((items,index)=>
            {
                return(
                    <div ><FilterButtons reset={reset} key={index} items={items} index={index} value={value} setValue={setValue} /></div>
                )
            }
            )
        }

       

    </div>
  )
}
