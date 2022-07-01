import React from 'react'
import { Formik, Form } from 'formik';
import { TextField } from '../textfield/TextField';
import * as Yup from'yup';

const GeneralInfo = () => {
  const validate= Yup.object({
    firstName: Yup.string()
            .min(3)
            .label('Full Name')
            .required("first name is required"),
    lastName:Yup.string()
            .required(),
    dob:Yup.date()
            .required(),
    gender:Yup.string()
            .required(),
    email: Yup.string()
            .email()
            .required(),
    phone: Yup.number()
          .min(7, 'Should have more than 7 characters')
          .required(),
    address:Yup.string()
          .required(),
    guardianName:Yup.string()
            .required(),
    guardianAddress:Yup.string()
            .required()

  })
 
  return (
    <div className="general-info">
    <Formik
    initialValues= {{
      firstName: '',
      lastName:'',
      dob:'',
      gender:'',
      email: '',
      phone: '',
      address:'',
      guardianName:'',
      guardianAddress:''
    }}
    validationSchema= {validate}
    onSubmit= {values=> {
      alert(`You are registered! FirstName: ${values.firstName}.LastName: ${values.lastName},DoB: ${values.dob},Gender: ${values.gender}, Email: ${values.email}, Phone: ${values.phone}, Address:${values.address},GuardianName: ${values.guardianName},GuardianAddress: ${values.guardianAddress} `);
    }}
   
>
  {formik => (
        <Form>
            <div className="form-data">
              <div className="row">
                  <TextField label='First Name' name='firstName' type='text'/>
                  <TextField label='Last Name' name='lastName' type='text'/>
                  <TextField label='Date of Birth' name='dob' type='date'/>
                  <TextField label='Gender' name='gender' type='text'/>
              </div>
              <div className="row">
                  <TextField label='Email' name='email' type='email'/>
                  <TextField label='Phone' name='phone' type='text'/>
                  <TextField label='Address' name='address' type='text'/>
              </div>
              <div className="row">
              <TextField label='Guardian Name' name='guardianName' type='text'/>
            <TextField label='Guardian Address' name='guardianAddress' type='text'/>
        
              </div>
            </div>
            <div className="form-btns">
            <div className="next">
              <input type="submit" value="Next" />
            </div>
            <div className="cancel">
              <input type="button" value="Cancel" />
            </div>
            </div>
          </Form>
  )}
  
    </Formik>
  </div>
)
  }
export default GeneralInfo