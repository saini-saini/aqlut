import React, { useState } from 'react'
import "./style.scss"
import cardImg from "../../../images/image 1.png"
import { FormControlLabel, Switch, styled } from '@mui/material'
import CreateMenu from './createMenu'
import info from "../../../images/info.png"
const Menus = () => {

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    margin: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


  const [createMenuOpen, setCreateMenuOpen] = useState(false);

  const openCreateMenuDialog = () => {
    setCreateMenuOpen(true);
  };

  const closeCreateMenuDialog = () => {
    setCreateMenuOpen(false);
  };


  return (
    <div className='menus'>
      <div className='menus__topWrapper'>
        <p className='menus__title'>Menus</p>
        <button className='menus__createButton' onClick={openCreateMenuDialog}>CREATE</button>
      </div>

      <div className='menus__allCardsWrapper'>
        <div className='menus__cardWrapper'>
          <div className='menus__imgWrapper'>
            <img src={cardImg} alt="" className='menus__img' />
          </div>
          <div className='menus__cardContent'>
            <div className='menus__cardHeading'>
              <p className='menus__cardTitle'>New Year Menu</p>
              <div>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  className='profile__switch'
                />
              </div>
            </div>
            <div className='menus__cardDescriptionWrapper'>
              <p className='menus__cardDescription'>
                Lorem Ipsum is simply dummy text of  the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className='menus__cardAction'>
            <button className='menus__deleteButton'>Delete</button>
            <button className='menus__editButton'>Edit</button>
          </div>
          <div className='menus__info'>
            <img src={info} alt="info" />
          </div>
        </div>
        <div className='menus__cardWrapper'>
          <div className='menus__imgWrapper'>
            <img src={cardImg} alt="" className='menus__img' />
          </div>
          <div className='menus__cardContent'>
            <div className='menus__cardHeading'>
              <p className='menus__cardTitle'>New Year Menu</p>
              <div>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  className='profile__switch'
                />
              </div>
            </div>
            <div className='menus__cardDescriptionWrapper'>
              <p className='menus__cardDescription'>
                Lorem Ipsum is simply dummy text of  the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className='menus__cardAction'>
            <button className='menus__deleteButton'>Delete</button>
            <button className='menus__editButton'>Edit</button>
          </div>
          <div className='menus__info'>
            <img src={info} alt="info" />
          </div>
        </div>
        <div className='menus__cardWrapper'>
          <div className='menus__imgWrapper'>
            <img src={cardImg} alt="" className='menus__img' />
          </div>
          <div className='menus__cardContent'>
            <div className='menus__cardHeading'>
              <p className='menus__cardTitle'>New Year Menu</p>
              <div>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  className='profile__switch'
                />
              </div>
            </div>
            <div className='menus__cardDescriptionWrapper'>
              <p className='menus__cardDescription'>
                Lorem Ipsum is simply dummy text of  the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className='menus__cardAction'>
            <button className='menus__deleteButton'>Delete</button>
            <button className='menus__editButton'>Edit</button>
          </div>
          <div className='menus__info'>
            <img src={info} alt="info" />
          </div>
        </div>
        <div className='menus__cardWrapper'>
          <div className='menus__imgWrapper'>
            <img src={cardImg} alt="" className='menus__img' />
          </div>
          <div className='menus__cardContent'>
            <div className='menus__cardHeading'>
              <p className='menus__cardTitle'>New Year Menu</p>
              <div>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  className='profile__switch'
                />
              </div>
            </div>
            <div className='menus__cardDescriptionWrapper'>
              <p className='menus__cardDescription'>
                Lorem Ipsum is simply dummy text of  the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className='menus__cardAction'>
            <button className='menus__deleteButton'>Delete</button>
            <button className='menus__editButton'>Edit</button>
          </div>
          <div className='menus__info'>
            <img src={info} alt="info" />
          </div>
        </div>
        <div className='menus__cardWrapper'>
          <div className='menus__imgWrapper'>
            <img src={cardImg} alt="" className='menus__img' />
          </div>
          <div className='menus__cardContent'>
            <div className='menus__cardHeading'>
              <p className='menus__cardTitle'>New Year Menu</p>
              <div>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  className='profile__switch'
                />
              </div>
            </div>
            <div className='menus__cardDescriptionWrapper'>
              <p className='menus__cardDescription'>
                Lorem Ipsum is simply dummy text of  the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className='menus__cardAction'>
            <button className='menus__deleteButton'>Delete</button>
            <button className='menus__editButton'>Edit</button>
          </div>
          <div className='menus__info'>
            <img src={info} alt="info" />
          </div>
        </div>

      </div>

      {createMenuOpen && <CreateMenu open={createMenuOpen} setOpen={setCreateMenuOpen} onClose={closeCreateMenuDialog} />}

    </div>
  )
}

export default Menus
