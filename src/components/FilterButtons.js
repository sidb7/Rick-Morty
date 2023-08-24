import React from 'react'

export default function FilterButtons({items,index,setValue,reset}) {
  
  return (
    <div  className='d-flex justify-content-between mb-4 '><div className="form-check">
    <input onChange={e=>setValue(e.target.value)} style={{cursor:"pointer",border:"2px solid gray"}} className="form-check-input" type="radio" name="exampleRadios" id={index} value={items} unchecked/>
    <label className="form-check-label" for="exampleRadios1">
     {items}
    </label>
  </div></div>
  )
}
