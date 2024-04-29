import "./section.scss"
import ViewItem from './view';
import info from "../../../images/info.png";
import CreateSection from './createSection';
import cardImg from "../../../images/image 1.png"
import { Select } from 'antd';
import React, { useState } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'

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

const Section = () => {

  const [createSectionOpen, setCreateSectionOpen] = useState(false);
  const [viewSectionOpen, setViewSectionOpen] = useState(false);

  const openCreateSectionDialog = () => {
    setCreateSectionOpen(true);
  };

  const closeCreateSectionDialog = () => {
    setCreateSectionOpen(false);
  };

  const openViewSectionDialog = () => {
    setViewSectionOpen(true);
  };

  const closeViewSectionDialog = () => {
    setViewSectionOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='section'>
      <div className='section__topWrapper'>
        <p className='section__title'>Dessert Sections</p>
        <button className='section__createButton' onClick={openCreateSectionDialog}>CREATE</button>
      </div>

      <div className='section__bottomWrapper'>
        <Select
          defaultValue="lucy"
          onChange={handleChange}
          className="section__customSelect"
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />


        <div className='section__allCardsWrapper'>
          <div className='section__cardWrapper'>
            <div className='section__imgWrapper'>
              <img src={cardImg} alt="" className='section__img' />
            </div>
            <div className='section__cardContent'>
              <div className='section__cardHeading'>
                <p className='section__cardTitle'>New Year Menu</p>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    className='profile__switch'
                  />
                </div>
              </div>
              <div className='section__cardDescriptionWrapper'>
                <p className='section__cardDescription'>
                  Lorem Ipsum is simply dummy text of  the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className='section__cardAction'>
              <button className='section__deleteButton'>Delete</button>
              <button className='section__editButton'>Edit</button>
            </div>
            <div className='menus__info'>
              <img src={info} alt="info" onClick={openViewSectionDialog} />
            </div>
          </div>
          <div className='section__cardWrapper'>
            <div className='section__imgWrapper'>
              <img src={cardImg} alt="" className='section__img' />
            </div>
            <div className='section__cardContent'>
              <div className='section__cardHeading'>
                <p className='section__cardTitle'>New Year Menu</p>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    className='profile__switch'
                  />
                </div>
              </div>
              <div className='section__cardDescriptionWrapper'>
                <p className='section__cardDescription'>
                  Lorem Ipsum is simply dummy text of  the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className='section__cardAction'>
              <button className='section__deleteButton'>Delete</button>
              <button className='section__editButton'>Edit</button>
            </div>
            <div className='menus__info' >
              <img src={info} alt="info" onClick={openViewSectionDialog} />
            </div>
          </div>
          <div className='section__cardWrapper'>
            <div className='section__imgWrapper'>
              <img src={cardImg} alt="" className='section__img' />
            </div>
            <div className='section__cardContent'>
              <div className='section__cardHeading'>
                <p className='section__cardTitle'>New Year Menu</p>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    className='profile__switch'
                  />
                </div>
              </div>
              <div className='section__cardDescriptionWrapper'>
                <p className='section__cardDescription'>
                  Lorem Ipsum is simply dummy text of  the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className='section__cardAction'>
              <button className='section__deleteButton'>Delete</button>
              <button className='section__editButton'>Edit</button>
            </div>
            <div className='menus__info'>
              <img src={info} alt="info" onClick={openViewSectionDialog} />
            </div>
          </div>
          <div className='section__cardWrapper'>
            <div className='section__imgWrapper'>
              <img src={cardImg} alt="" className='section__img' />
            </div>
            <div className='section__cardContent'>
              <div className='section__cardHeading'>
                <p className='section__cardTitle'>New Year Menu</p>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    className='profile__switch'
                  />
                </div>
              </div>
              <div className='section__cardDescriptionWrapper'>
                <p className='section__cardDescription'>
                  Lorem Ipsum is simply dummy text of  the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className='section__cardAction'>
              <button className='section__deleteButton'>Delete</button>
              <button className='section__editButton'>Edit</button>
            </div>
            <div className='menus__info'>
              <img src={info} alt="info" onClick={openViewSectionDialog} />
            </div>
          </div>
          <div className='section__cardWrapper'>
            <div className='section__imgWrapper'>
              <img src={cardImg} alt="" className='section__img' />
            </div>
            <div className='section__cardContent'>
              <div className='section__cardHeading'>
                <p className='section__cardTitle'>New Year Menu</p>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    className='profile__switch'
                  />
                </div>
              </div>
              <div className='section__cardDescriptionWrapper'>
                <p className='section__cardDescription'>
                  Lorem Ipsum is simply dummy text of  the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className='section__cardAction'>
              <button className='section__deleteButton'>Delete</button>
              <button className='section__editButton'>Edit</button>
            </div>
            <div className='menus__info' onClick={openViewSectionDialog}>
              <img src={info} alt="info" onClick={openViewSectionDialog} />
            </div>
          </div>

        </div>
        {createSectionOpen && <CreateSection open={createSectionOpen} setOpen={setCreateSectionOpen} onClose={closeCreateSectionDialog} />}
        {viewSectionOpen && <ViewItem open={viewSectionOpen} setOpen={setViewSectionOpen} onClose={closeViewSectionDialog} />}

      </div>
    </div>
  )
}

export default Section
