
import { Outlet } from 'react-router-dom';
import './App.scss';
import SideNav from './sideNav/SideNav';


function App() {
  return (<>
    <div className="App">
       <SideNav/>
        <Outlet/>
       
      
      


    {/* <Routes>
      <Route path='/' element={<UserMgmt/>}/>
        <Route path='/usermgmt' element={<UserMgmt/>}/>
        <Route path='/stdmgmt' element={<StudentMgmt/>}>
              <Route path='generalinfo' element={<GeneralInfo/>}/>
          </Route> 
      </Routes> */}
    </div>
    </>
  );
}

export default App;
