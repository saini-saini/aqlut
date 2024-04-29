import React, { useState } from 'react'
import './navBar.scss'
import BellIcon from "../../images/bellIcon.png"
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import icon from "../../images/icon.png";
import ReorderIcon from '@mui/icons-material/Reorder';
const NavBar = ({toggleSidebar}) => {
    const [openLogout, setOpenLogout] = useState(false)

    return (
        <div className='navBar'>
            <div className='navBar__reorder' onClick={toggleSidebar}>
                <ReorderIcon />
            </div>
            <img src={BellIcon} alt="" className='navBar__icon' />
            <div className='navBar__profileWrapper'>
                <Avatar />
                <p className='navBar__Username'>Barbeque Nation</p>
                <KeyboardArrowDownIcon className='navBar__moreicon' onClick={() => setOpenLogout(!openLogout)} />
            </div>

            {openLogout && <div className='navBar__logout'>
                <img src={icon} alt="" />
                <span>Logout</span>
            </div>}
        </div>
    )
}

export default NavBar
