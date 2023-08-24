import React, { useState } from 'react'
import styles from "../Styles/BootCustom.module.scss"
import { Link } from 'react-router-dom'

export default function Cards({results,setPageNumber}) {
    

    
    return(
        <>

        {
        
        (results)?
       
         results.map(res=>{
            let {name,id,image,location,status} = res
        
            return(

               
                <Link style={{textDecoration:"none"}} to={`/cardDetails/${id}`} key={id} className='text-dark col-lg-4 col-md-6 h-50  pb-4 position-relative '> 
    <div className={`${styles.cardContainer}   `}>
    
                <img src={image} className={`${styles.image} img-fluid`} alt="" />
                <div className= ' p-2'>
                <div className='fs-4 fw-medium'>{name}</div>
                <div className='fs-6 mt-3'>Location:</div>
                <div className='fs-5'>{location.name}</div>
                </div>

                <div className={`${styles.badge} position-absolute badge text-bg-${(status==='Alive')?`success`:(status==='Dead')?'danger':'secondary'}`} >{status}</div>
                </div>

                </Link>
            )

        })
        :   <div> {setPageNumber(1)} <h1>Results not Found</h1></div>
       

        }
    
    
    </>)
   
}
