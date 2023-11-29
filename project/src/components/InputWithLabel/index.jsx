import React from 'react'
import './style.css'



const InputWithLabel = ({ onChange, placeholder, type }) => {
  return (
    <div className='inputwithlabel' >
      <label >{type}</label>
      <input type={type}  placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>

  )
}

export default InputWithLabel