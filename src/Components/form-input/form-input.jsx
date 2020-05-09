import React from 'react'
import './form-input.scss'

const FormInput =({label,handleChange, ...otherProps})=>{
    return <div className='group'>
        <input {...otherProps} onChange={handleChange} className='form-input'/>
        {
            label?(<label className={`${otherProps.value.length? 'shrink':''} form-input-label` }>{label}</label>):null
        }
    </div>
}

export default FormInput