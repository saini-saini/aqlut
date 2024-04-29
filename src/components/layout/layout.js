import React, { useState } from 'react'
import './layout.scss'
import NavBar from '../navBar/navBar'
import SideBar from '../sideBar/sideBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };


    return (
        <div className='layout'>
                <div className='layout__nabBar'>
                    <NavBar toggleSidebar={toggleSidebar}/>
                </div>
                <div className={`layout__sideBar ${sidebarVisible ? 'visible' : ''}`}>
                <SideBar />
            </div>
                <div className='layout__main'>
                <Outlet/>
                </div>
            </div>
    )
}


export default Layout
