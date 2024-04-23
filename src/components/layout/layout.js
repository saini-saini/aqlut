import React from 'react'
import './layout.scss'
import NavBar from '../navBar/navBar'
import SideBar from '../sideBar/sideBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {

    return (
        <div className='layout'>
                <div className='layout__nabBar'>
                    <NavBar/>
                </div>
                <div className='layout__sideBar'>
                    <SideBar/>
                </div>
                <div className='layout__main'>
                <Outlet/>
                </div>
            </div>
    )
}


export default Layout
