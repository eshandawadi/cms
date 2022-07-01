import React from 'react'
import Subtract from "../assets/images/Subtract.png";

const FormLabel = (props) => {
  return (
    <div className="label-title">
    <img src={Subtract} alt="subtract" />
    <label htmlFor="firstName">{props.title}</label>
  </div>
  )
}

export default FormLabel