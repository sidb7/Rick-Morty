import React, { useState } from 'react'
import styles from '../Styles/Filter.module.scss'
import {LuFilter,LuFilterX} from 'react-icons/lu'

import '../Styles/NavBar.css'






export default function NavFilter({setReset,reset ,setStatus,setGender,setSpecies}) {

  const show = ()=>
  {
        
    if(reset===1){

   
  setReset(0)
  setStatus("")
  setGender("")
  setSpecies("")
  }
      
    else
    {
     
      setReset(1)
   
      
    }
  }
 

  return (
    <div className={`${styles.FilterBox}`}>

       

        <div onClick={show}   className={`${styles.FilterIcon}`} >
       {(reset===1)?<LuFilterX size={40}/>: <LuFilter size={40}/>}
        </div>
          
        


       

    </div>
  )
}
