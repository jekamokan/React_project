import React from 'react'
import './style.css'



const InputWithLabel = ({ hash, onChange, placeholder, type }) => {
  return (
    <div className='inputwithlabel' >
      <label htmlFor={hash}>{type}</label>
      <input type={type} id={hash} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>

  )
}

export default InputWithLabel