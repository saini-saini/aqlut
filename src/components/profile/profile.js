import React, { useState } from 'react'
import "./profile.scss"
import { Button, FormControlLabel, Switch, styled } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import shop from "../../images/shop.png"
import email from "../../images/email.png"
import location from "../../images/location.png"
import clock from "../../images/clock.png"
import phone from "../../images/telephone.png"
import eyeglasses from "../../images/eyeglasses.png"
import dollar from "../../images/dollar.png"
import percentage from "../../images/percentage.png"
import Checkbox from '@mui/material/Checkbox';
import calender from "../../images/check-mark.png"
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import ChangePassword from './changePassword'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Avatar from '@mui/material/Avatar';
import img from "../../images/createMenuImg.png"



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

const Profile = () => {

  const [value, setValue] = useState()
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dayChecked, setDayChecked] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const openChangePasswordDialog = () => {
    setChangePasswordOpen(true);
  };

  const closeChangePasswordDialog = () => {
    setChangePasswordOpen(false);
  };

  const handleDayCheckboxChange = (day) => (event) => {
    setDayChecked((prev) => ({
      ...prev,
      [day]: event.target.checked,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  
  const removeImage = () => {
    setSelectedImage(null);
    document.getElementById('imageInput').value = '';
  };
  

  
  return (
    <div className='profile'>
      <div className='profile__topWrapper'>
        <p className='profile__title'>Profile</p>
        <button className='profile__changePassButton' onClick={openChangePasswordDialog}>CHANGE PASSWORD</button>
      </div>

      <div className='profile__centerBottom'>

        <div className='profile__centerWrapper'>
          <div className='profile__centerLeft'>
            <div className='profile__logoImgWrapper'>
              {selectedImage ? (
                <Avatar
                  src={URL.createObjectURL(selectedImage)}
                  alt="logo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: "contain",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <div style={{
                  width: "100%",
                  height: '100%',
                  objectFit: "cover",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 8px 0px #00000040",
                }}>
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px"
                    }}
                  />
                </div>
              )}
            </div>
            <div className='profile__btnWrapper'>
              <label htmlFor="imageInput" className='profile__changeBtn'>
                change photo
              </label>
              <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
              <button className='profile__removeBtn' onClick={removeImage}>remove photo</button>
            </div>
          </div>
          <div>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Disable Orders"
              labelPlacement="start"
              className='profile__switch'
            />
          </div>
        </div>

        <div className='profile__bottom'>
          <Formik
            initialValues={{ restaurantName: '', mailAddress: '', address: '', timeZone: '', restaurantBio: '', currency: '', vat: '', serviceCharge: '', phoneNumber: '', time: {} }}
            onSubmit={values => console.log(values)}
          >
            <Form className='profile__form'>
              <div className='profile__formWrapper'>
                <div className='profile__formLeft'>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={shop} alt="" className='profile__inputIcon' /><span>Restaurant Name</span></label>
                    <Field type="text" name="restaurantName" placeholder="Enter restaurant name" autoComplete="off" className='profile__input' />
                    <ErrorMessage name="restaurantName" component={""} className='profile__error' />
                  </div>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={email} alt="" className='profile__inputIcon' /><span>Mail Address</span></label>
                    <Field type="text" name="mailAddress" placeholder="Enter mail address" autoComplete="off" className='profile__input' />
                    <ErrorMessage name="mailAddress" component={""} className='profile__error' />
                  </div>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={location} alt="" className='profile__inputIcon' /><span>Address</span></label>
                    <Field type="text" name="address" placeholder="Enter address" autoComplete="off" className='profile__input' />
                    <ErrorMessage name="address" component={""} className='profile__error' />
                  </div>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={clock} alt="" className='profile__inputIcon' /><span>Time Zone</span></label>
                    <Field type="text" name="timeZone" placeholder="Enter time zone" autoComplete="off" className='profile__input' />
                    <ErrorMessage name="timeZone" component={""} className='profile__error' />
                  </div>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={phone} alt="" className='profile__inputIcon' /><span>Phone Number</span></label>
                    <div style={{ borderRadius: "8px", backgroundColor: "white", display: "flex", border: " 1px solid #F0F1F7" }}>
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="IN"
                        country={'in'}
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        autoFocus={true}
                      />
                    </div>
                    <ErrorMessage name="phoneNumber" component={""} className='profile__error' />
                  </div>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={eyeglasses} alt="" className='profile__inputIcon' /><span>Restaurant Bio</span></label>
                    <Field as="textarea" resize="none" name="restaurantBio" placeholder="Enter restaurant bio" autoComplete="off" className='profile__restaurantBioInput' />
                    <ErrorMessage name="restaurantBio" component={""} className='profile__error' />
                  </div>

                </div>

                <div className='profile__formRight'>
                  <div className='profile__inputWrapper'>
                    <label className='profile__label'><img src={dollar} alt="" className='profile__inputIcon' /><span>Currency</span></label>
                    <Field type="text" name="currency" placeholder="Enter currency" autoComplete="off" className='profile__input' />
                    <ErrorMessage name="currency" component={""} className='profile__error' />
                  </div>

                  <div className='profile__rightCharges'>
                    <div className='profile__inputWrapper'>
                      <label className='profile__label'><img src={percentage} alt="" className='profile__inputIcon' /><span>VAT %</span></label>
                      <Field type="text" name="vat" placeholder="Enter vat%" autoComplete="off" className='profile__rightChargesinput' />
                      <ErrorMessage name="vat" component={""} className='profile__error' />
                    </div>
                    <div className='profile__inputWrapper'>
                      <label className='profile__label'>Service Charge %</label>
                      <Field type="text" name="serviceCharge" placeholder="Enter service charge" autoComplete="off" className='profile__rightChargesinput' />
                      <ErrorMessage name="serviceCharge" component={""} className='profile__error' />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <label className='profile__label'><img src={calender} alt="" className='profile__inputIcon' /><span>Opening Times</span></label>
                    <div style={{ display: "flex", flexDirection: "column" }} className='profile__dayContainer'>
                      {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => (
                        <div key={day} style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "end" }} className='profile__day'>
                          <div className='profile__daylabelWrapper'>
                            <label className='profile__daylabel'>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                          </div>

                          <div style={{ display: "flex", gap: "25px", alignItems: "center" }} className='profile__dayTime'>
                            <div>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']}>
                                  <div style={{ width: "108px" }}>
                                    <MobileTimePicker label="Open Time" disabled={dayChecked[day]}
                                    />
                                  </div>
                                </DemoContainer>
                              </LocalizationProvider>
                            </div>

                            <div>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']}>
                                  <div style={{ width: "108px" }}>
                                    <MobileTimePicker label="Close Time" disabled={dayChecked[day]}
                                    />
                                  </div>
                                </DemoContainer>
                              </LocalizationProvider>
                            </div>

                            <div>
                              <FormControlLabel
                                control={<Checkbox color='warning' checked={dayChecked[day]} onChange={handleDayCheckboxChange(day)} />}
                                label="Close"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
              <div className='profile__update'>
                <button className='profile__updateBtn'>UPDATE</button>
              </div>
            </Form>
          </Formik>

          <div>
            {changePasswordOpen && <ChangePassword open={changePasswordOpen} setOpen={setChangePasswordOpen} onClose={closeChangePasswordDialog} />}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile
