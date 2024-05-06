import './sideBar.scss';
import menu from "../../images/bill.png";
import Avatar from '@mui/material/Avatar';
import QRCode from "../../images/qrScan.png";
import order from "../../images/order (2).png";
import Accordion from '@mui/material/Accordion';
import profile from "../../images/user (1).png";
import rhombus from "../../images/rhombus (2).png";
import activeUser from "../../images/active-user.png"
import activeMenu from "../../images/avtive-bill.png"
import activeQRMenu from "../../images/active-qr-scan.png"
import activeOrder from "../../images/active-clipboard.png"
import activeRhombus from "../../images/active-rhombus.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import profileLogo from "../../images/profileSectionImg1.png";
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SideBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='sideBar' >
      <Avatar alt="logo" src={profileLogo ? profileLogo : ""} sx={{ width: 90, height: 90, margin: "20px" }} />
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {location.pathname === '/home' && (
            <div style={{ width: "6px", height: "27px", background: "#F55A2C" }}></div>
          )}
          <li className={`sideBar__normalli ${location.pathname === '/home' ? 'active' : ''}`} onClick={() => { navigate("/home"); handleSetActiveLink('/home'); }}>
            <img src={location.pathname === '/home' ? activeUser : profile} alt="profile" className='sideBar__icon' /><span>Profile</span>
          </li>
        </div>

        <div className='sideBar__accordionWrapper'>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Accordion
              sx={{
                padding: "0px",
                border: "none",
                boxShadow: "none",
                margin: "0px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  margin: "0px", gap: "108px"
                }}
              >
                <div className='sideBar__expandHeading'>
                  {(location.pathname === '/home/menus/menus' || location.pathname === '/home/menus/sections' || location.pathname === '/home/menus/section_items') && (
                    <div style={{ width: "6px", height: "27px", background: "#F55A2C", marginLeft: '-17px' }}></div>
                  )}
                  <img src={location.pathname === '/home/menus/menus' || location.pathname === '/home/menus/sections' || location.pathname === '/home/menus/section_items' ? activeMenu : menu} alt="menu" className='sideBar__icon' /><span style={{ display: 'flex', justifyContent: 'space-between', color: (location.pathname === '/home/menus/menus' || location.pathname === '/home/menus/sections' || location.pathname === '/home/menus/section_items') ? '#F55A2C' : 'inherit' }}>Menus</span>
                </div>
              </AccordionSummary>
              <AccordionDetails >
                <li className={`sideBar__expandLi ${location.pathname.includes('/home/menus/menus') ? 'active' : ''}`} onClick={() => { navigate("/home/menus/menus"); handleSetActiveLink('/home/menus/menus'); }}><img src={location.pathname === '/home/menus/menus' ? activeRhombus : rhombus} alt="" className='sideBar__rhombus' />Menus</li>
                <li className={`sideBar__expandLi ${location.pathname.includes('/home/menus/sections') ? 'active' : ''}`} onClick={() => { navigate("/home/menus/sections"); handleSetActiveLink('/home/menus/sections'); }}><img src={location.pathname === '/home/menus/sections' ? activeRhombus : rhombus} alt="" className='sideBar__rhombus' />Sections</li>
                <li className={`sideBar__expandLi ${location.pathname.includes('/home/menus/section_items') ? 'active' : ''}`} onClick={() => { navigate("/home/menus/section_items"); handleSetActiveLink('/home/menus/section_items'); }}><img src={location.pathname === '/home/menus/section_items' ? activeRhombus : rhombus} alt="" className='sideBar__rhombus' />Section items</li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className='sideBar__accordionWrapper'>
          <Accordion
            sx={{
              padding: "0px",
              border: "none",
              boxShadow: "none",
              margin: "0px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ margin: "0px" }}
            >
              <div className='sideBar__expandHeading'>
                {(location.pathname === '/home/qr-menus/qr-codes' || location.pathname === '/home/qr-menus/qr-menu-groups') && (
                  <div style={{ width: "6px", height: "27px", background: "#F55A2C", marginLeft: '-17px' }}></div>
                )}
                <img src={location.pathname === '/home/qr-menus/qr-codes' || location.pathname === '/home/qr-menus/qr-menu-groups' ? activeQRMenu : QRCode} alt="menu" className='sideBar__icon' /><span style={{ display: 'flex', justifyContent: 'space-between', color: (location.pathname === '/home/qr-menus/qr-codes' || location.pathname === '/home/qr-menus/qr-menu-groups') ? '#F55A2C' : 'inherit' }}>QR Menus</span>
              </div>
            </AccordionSummary>
            <AccordionDetails >
              <li className={`sideBar__expandLi ${location.pathname.includes('/home/qr-menus/qr-codes') ? 'active' : ''}`} onClick={() => { navigate("/home/qr-menus/qr-codes"); handleSetActiveLink('/home/qr-menus/qr-codes'); }}><img src={location.pathname === '/home/qr-menus/qr-codes' ? activeRhombus : rhombus} alt="" className='sideBar__rhombus' />QR Codes</li>
              <li className={`sideBar__expandLi ${location.pathname.includes('/home/qr-menus/qr-menu-groups') ? 'active' : ''}`} onClick={() => { navigate("/home/qr-menus/qr-menu-groups"); handleSetActiveLink('/home/qr-menus/qr-menu-groups'); }}><img src={location.pathname === '/home/qr-menus/qr-menu-groups' ? activeRhombus : rhombus} alt="" className='sideBar__rhombus' />QR Menu Groups</li>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </nav>
  )
}

export default SideBar;
