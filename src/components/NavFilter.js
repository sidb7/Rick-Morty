import React, { useState } from 'react'
import styles from '../Styles/Filter.module.scss'
import {HiOutlineFilter} from 'react-icons/hi'
import '../Styles/NavBar.css'






export default function NavFilter({setReset,reset ,setStatus,setGender,setSpecies}) {
  const [show1 ,setShow] = useState(0)
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
        <HiOutlineFilter size={40}/>
        </div>
          
        


       

    </div>
  )
}
