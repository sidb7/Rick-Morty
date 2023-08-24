import React from 'react'
import styles from '../Styles/BootCustom.module.scss'
import '../Styles/NavBar.css'
import {BiSearch} from 'react-icons/bi'
export default function Search({setSearch , setPageNumber}) {

 

  return (
    <>
    
    <div className={`${styles.searchBox} mb-5`}> <BiSearch id='SearchIcon' size={30} color='gray'/> <input onChange={e=>{setPageNumber(1); setSearch( e.target.value)}} id='search' autoComplete='off' type="text" placeholder='Search Characters ' /></div>
    
    </>
  )
}
