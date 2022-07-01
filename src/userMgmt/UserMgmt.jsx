import React, { useState } from 'react'
import SideNav from '../sideNav/SideNav'
import TopNav from '../topNav/TopNav'
import './userMgmt.scss'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
const UserMgmt = () => {
    const [rowData] = useState([
        {sn:1,name:'Eshan Dawadi',account:'eahan.nobel@gmail.com',role:'student',status:'Active'},
        {sn:2,name:'Eshan Dawadi',account:'eahan.nobel@gmail.com',role:'student',status:'Active'},
    ]);
    
    const [columnDefs] = useState([
        {field:'sn', headerName: 'S.N'},
        {field:'name', headerName: 'Name'},
        {field:'account', headerName: 'Account' },
        {field:'role',headerName:'Role'},
        {field:'status',headerName:'Status'}

    ])
    const defaultColDef = {
        sortable: true,
        editable: true,
        // flex: 1,
        filter: true,
        floatingFilter: true
    }
  return (
    <div className='user-mgmt'>
        {/* <SideNav/> */}
        <div className="main"> 
           {/* <TopNav/> */}
            <div className="body">
                <div className="h2">Showing All Users</div>
                <div className="ag-theme-alpine" style={{height: 800, width: 1200}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={defaultColDef}
               pagination={true}
               paginationPageSize={4}
               
               >
                

           </AgGridReact>
       </div>
            </div>
        </div>
    </div>
  )
}

export default UserMgmt