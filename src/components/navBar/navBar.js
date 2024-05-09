import './navBar.scss'
import icon from "../../images/icon.png";
import Avatar from '@mui/material/Avatar';
import BellIcon from "../../images/bellIcon.png"
import ReorderIcon from '@mui/icons-material/Reorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useEffect, useState } from 'react'
import { getProfileDetailsAPI } from '../../service/Collection';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = ({ toggleSidebar }) => {
  const [openLogout, setOpenLogout] = useState(false)
  const [userName, setUserName] = useState({
    resturantName: ""
  });
  const navigate = useNavigate();
  const getProfileDetails = async () => {
    let res = await getProfileDetailsAPI();
    const fetchedData = res?.data?.restaurants[0];
    setUserName(fetchedData);
  }

  const handleNavigate = async () => {
    try {
      localStorage.removeItem('token');
      toast.success("Logout successfully")
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong", {
        theme: "colored",
      })
    }
  }

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div className='navBar'>
      <div className='navBar__reorder' onClick={toggleSidebar}>
        <ReorderIcon />
      </div>
      <img src={BellIcon} alt="" className='navBar__icon' />
      <div className='navBar__profileWrapper'>
        <Avatar src={userName?.logo} />
        <p className='navBar__Username'>{userName?.resturantName}</p>
        <KeyboardArrowDownIcon className='navBar__moreicon' onClick={() => setOpenLogout(!openLogout)} />
      </div>

      {openLogout && <div className='navBar__logout'>
        <img src={icon} alt="" />
        <span onClick={handleNavigate}>Logout</span>
      </div>}
    </div>
  )
}

export default NavBar
