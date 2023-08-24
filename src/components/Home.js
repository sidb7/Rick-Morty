import React, { useEffect, useState } from 'react'
import "../Styles/Home.css"

import NavFilter from './NavFilter'
import Cards from './Cards'
import '../App.css';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import Search from './Search';
import Filter from './Filter';


export default function Home() {

    let [pageNumber,setPageNumber] = useState(1)
    let [array,setArray]  = useState([])
    let {info,results} = array
    let [pages,setPages] =useState(0)
    let [search,setSearch] =useState("")
    let [reset,setReset]=useState(1)
    let [Status,setStatus] = useState("")
    let [gender,setGender] = useState("")
    let [species,setSpecies] = useState("")
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${Status}&gender=${gender}&species=${species}`

    useEffect (()=> {
        
        let data = async ()=>
        {
            let data = await fetch(url).then(res=>res.json())
            setArray(data)
            //console.log(data)
           
           try{setPages(data.info.pages)} 
           catch{
            <div>ERROR</div>
            setPages(0)
           }
        }
        
        data()

    },[url])
    
    const next =()=>
    {
        if(pageNumber===info.pages){setPageNumber(1)}
        else{setPageNumber((x=>x+1))} 
    }
    const prev =()=>
    {
        if(pageNumber===1){setPageNumber(info.pages)}
       else{ setPageNumber((x=>x-1))}
    }
    console.log(pageNumber)
  return (
    <>
  
    <div id=' home'  >

        {/* <h1 className='fontcss my-4 text-center fw-bold w-100 '  ><span className='text-success'>RICK</span> & <span className='text-success'>Morty </span> </h1> */}
        <div className='w-100 d-flex justify-content-center'><Search setSearch={setSearch} setPageNumber={setPageNumber}/></div>
        
        <div className='w-25 mb-5  d-flex justify-content-end position-absolute end-0'> <NavFilter reset={reset} setReset={setReset} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} /></div>

 <div className='container  m-auto   ' >
    <div className='row m-auto'>
       
            <div className='col-10'>
                
            <div className="row">
             <Cards results ={results} setPageNumber={setPageNumber} /></div>
             </div>

        <div className='col-2'><Filter reset={reset} setPageNumber={setPageNumber} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} /></div>
    </div>
    </div>

    </div>


    <div className='d-flex justify-content-center mb-5'>
        <div onClick={prev} className=" PrevNex mx-5 d-flex align-items-center "><AiOutlineLeft size={30}/></div>
        <div className='fs-4 fw-semibold fontcss '>{pageNumber}/{pages}</div>
        <div onClick={next} className=" PrevNex mx-5 d-flex align-items-center "><AiOutlineRight size={30}/></div>
    </div>
    
    
    </>
  )
}
