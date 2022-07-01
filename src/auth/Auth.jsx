// import React from 'react'
// import './auth.scss'
// import { Formik,Form } from 'formik';
// import { TextField } from '../textfield/TextField';
// import * as Yup from'yup';
// const Auth = () => {
//   const validate=Yup.object({
//     role:Yup.string()
//     .min(3,'Must be greater than 3 characters')
//     .required('Required'),
//     stdid:Yup.string()
//     .min(3,'Must be greater than 3 characters')
//     .required('Required'),
//     email:Yup.string()
//     .email('Email is invalid')
//     .required('Required')

//   })
//   return (
//     <div className='auth'>
//       <Formik
//       initialValues={{
//         role:'',
//         stdid:'',
//         email:''
//       }}
//       validationSchema={validate}
//       onSubmit={values =>{
//         alert(`${values.role}`);
//       }}
//       >
//         {formik => (
//           <Form>
//              <div className="form-data">
//             <TextField label='Role' name='role' type='text'/>
//             <TextField label='Student ID' name='stdid' type='text'/>
//             <TextField label='Email' name='email' type='email'/>
//             </div>
//             <div className="form-btns">
//             <div className="next">
//             <input type='submit' value='Create Account'/>
//             </div>
//             <div className="cancel">
//             <input type='button' value='Cancel'/>
//             </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//         {/* <form action="">
//             <div className="form-data">
//                 <div className="form-value">
//                   <FormLabel title='Role'/>
//                   <input type="text" id="firstName" />
//                 </div>
//                 <div className="form-value">
//                   <FormLabel title='Student ID'/>
//                   <input type="text" id="firstName" />
//                 </div>
//                 <div className="form-value">
//                   <FormLabel title='Email'/>
//                   <input type="text" id="firstName" />
//                 </div>
//                 </div>
//                 <div className="form-btns">
//             <div className="next">
//               <input type="submit" value="Next" />
//             </div>
//             <div className="cancel">
//               <input type="button" value="Cancel" />
//             </div>
//             </div> */}
//         {/* </form> */}
//     </div>
//   )
// }

// export default Auth