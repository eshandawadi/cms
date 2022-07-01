import React from 'react'
import './textfield.scss';
import Subtract from "../assets/images/Subtract.png";
import {ErrorMessage, useField } from 'formik'
export const TextField = ({label,...props}) => {
    const [field,meta]=useField(props);
  return (
    <div className='textfield' >
         <div className="label-title">
         <img src={Subtract} alt="subtract" />
        <label htmlFor={field.name}>{label}</label>
        </div>
        <input className={`${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
        <ErrorMessage component='div' name={field.name} className='error'/>
    </div>
  )
}
