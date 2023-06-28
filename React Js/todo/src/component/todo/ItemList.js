import React from 'react'
import "./ItemList.css"
export default function ItemList(props) {

  return (
    <>
    <div className='d-flex justify-content-between align-items-center itemcontainer'>
      <li  key={props.id} className="item font-weight-bold">{props.totalItems}</li>
      <i className="fa-solid fa-trash" onClick={()=>{
        props.del(props.id)
      }}></i>
    </div>
    </>
  )
}
