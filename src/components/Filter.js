import React from 'react'
import styles from '../Styles/Filter.module.scss'
import Status from './Category/Status'
import Species from './Category/Species'
import Gender from './Category/Gender'
export default function Filter({reset,setStatus,setGender, setSpecies,setPageNumber}) {
 
 
    return (
      (reset==1)?
    <div  className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div><Status reset={reset} setStatus={setStatus} setPageNumber={setPageNumber} /></div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div><Gender  reset={reset} setGender={setGender} setPageNumber={setPageNumber} /></div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div><Species  reset={reset} setSpecies={setSpecies} setPageNumber={setPageNumber}  /></div>
      </div>
    </div>
  </div>
</div>:""
      
      )
 
}
