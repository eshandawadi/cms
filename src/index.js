import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

// import TopNav from './topNav/TopNav';
import UserMgmt from './userMgmt/UserMgmt';
import StudentMgmt from './studentMgmt/StudentMgmt';
import Body from './body/Body';
import GeneralInfo from './generalInfo/GeneralInfo';
import Academics from './academics/Academics';
import Login from './auth/Login'
// import Auth from './auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='usermgmt' element={<Body/>}>
            <Route path='viewuser' element={<UserMgmt/>}/>
            <Route path='stdmgmt' element={<StudentMgmt/>}>
              <Route path='generalinfo' element={<GeneralInfo/>}/>
              <Route path='academics' element={<Academics/>}/>
              {/* <Route path='auth' element={<Auth/>}/> */}
              <Route path='auth' element={<Login/>}/>
              </Route>
           </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
