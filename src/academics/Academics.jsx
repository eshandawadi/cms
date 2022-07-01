import React from 'react'
import FormLabel from '../formLabel/FormLabel'
import './academics.scss'
import { Formik,Form } from 'formik';
import { TextField } from '../textfield/TextField';
import * as Yup from'yup';
const Academics = () => {
  const validate=Yup.object({
    joiningdate:Yup.string()
    
    .required('Required'),
    faculty:Yup.string()
    .min(3,'Must be greater than 3 characters')
    .required('Required'),
    program:Yup.string()
    .required('Required'),
    semester:Yup.string()
    .required('Required'),
    registration:Yup.string()
    .required('Required'),
    puregistration:Yup.string()
    .min(5,'Must be more than 5 characters')
    .required('Required')

  })
  return (
    <div className='academics'>
      <Formik 
      initialValues={{
        joiningdate:'',
        faculty:'',
        program:'',
        semester:'',
        registration:'',
        puregistration:''
       
      }}
      validationSchema={validate}
      onSubmit={values =>{
        alert(`${values.role}`);
      }}
      >
        {formik =>(
          <Form>
            <div className="form-data">
            <TextField label='Joining Date' name='joiningdate' type='date'/>
            <TextField label='Faculty' name='faculty' type='text'/>
            <TextField label='Program' name='program' type='text'/>
            <TextField label='Semester' name='semester' type='text'/>
            <TextField label='Registration' name='registration' type='text'/>
            <TextField label='PU Registration' name='puregistration' type='text'/>
            </div>
            <div className="form-btns">
            <div className="next">
            <input type='submit' value='Next'/>
            </div>
            <div className="cancel">
            <input type='button' value='Cancel'/>
            </div>
            </div>
          </Form>
        )}
      </Formik>
        {/* <form action="">
            <div className="form-data">
                <div className="form-value">
                  <FormLabel title='Joining Date'/>
                  <input type="date" id="firstName" />
                </div>
                <div className="form-value">
                  <FormLabel title='Faculty'/>
                  <input type="text" id="firstName" />
                </div>
                <div className="form-value">
                  <FormLabel title='Program'/>
                  <input type="text" id="firstName" />
                </div>
                <div className="form-value">
                  <FormLabel title='Semester'/>
                  <input type="text" id="firstName" />
                </div>
                <div className="form-value">
                  <FormLabel title='Registration Number*'/>
                  <input type="text" id="firstName" />
                </div>
                <div className="form-value">
                  <FormLabel title='PU Registration*'/>
                  <input type="text" id="firstName" />
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
        </form> */}
    </div>
  )
}

export default Academics