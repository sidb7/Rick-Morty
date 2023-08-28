import React from 'react'
import FilterButtons from '../FilterButtons'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Species({setSpecies,setPageNumber}) {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet"
    ]
    let [value,setValue] =useState("")
    useEffect(()=>
    {
        setPageNumber(1)
    },[value])
  return (
 
    <div className='d-block  p-3'>
       {setSpecies(value)}
     
        {
            species.map((items,index)=>
            {
                return(
                    <div ><FilterButtons key={index} items={items} index={index} value={value} setValue={setValue}/></div>
                )
            }
            )
        }

       

    </div>
  )
}
