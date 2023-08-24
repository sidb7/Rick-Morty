import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../Styles/CardDetails.module.scss'

export default function CardDetails() {

    const {id} =useParams() 
    let url = `https://rickandmortyapi.com/api/character/${id}`
    const [arr,updateArr] =useState([])

   

    useEffect (()=> {
        
        let data = async ()=>
        {
            let data = await fetch(url).then(res=>res.json())
            
            //console.log(data)
           updateArr(data)
            console.log(data)
        }
        
        data()

    },[url])
    let{image,status,name,gender,species,location,origin,type} =arr
   
  return (
    <div className='w-100 mt-5 d-flex justify-content-center mb-5 ' >
      
        <div className="card w-50 ">
  <div className="card-header">
    <div className='w-100 fs-1 fontcss text-secondary fw-semibold bg-secondary-subtle text-center'>{name}</div>
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
    <div className={`${styles.image}`}><img  src={image} className="img-fluid " alt="..."/></div>
      <div style={{borderRadius:"10px"}} className={`fs-4 text-light fontcss bg-${(status=="Alive")?`success`:(status=="Dead")?`Danger`:`secondary`} text-center mt-1`}>{status}</div>
      <div className='w-100'> 
      
      <div className='fs-4 m-4 mb-0 fw-semibold fontcss'>Gender: <span className='fw-light'>{gender}</span> </div>
      <div className='fs-4 m-4 fw-semibold fontcss'>Species: <span className='fw-light'>{species}</span></div>
      <div className='fs-4 m-4 fw-semibold fontcss'>Type: <span className='fw-light'>{(type==="")?"Unknown":type}</span></div>
      <div className='fs-4 m-4 fw-semibold fontcss'>Origin: <span className='fw-light'>{origin?.name}</span></div>
      <div className='fs-4 m-4 fw-semibold fontcss'>Location: <span className='fw-light'>{location?.name}</span></div>
       </div>
    </blockquote>
  </div>
</div>

        
         </div>
  )
}
