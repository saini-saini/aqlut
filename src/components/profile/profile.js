import "./profile.scss"
import shop from "../../images/shop.png"
import Avatar from '@mui/material/Avatar';
import email from "../../images/email.png"
import clock from "../../images/clock.png"
import 'react-phone-input-2/lib/style.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import dollar from "../../images/dollar.png"
import ChangePassword from './changePassword'
import Checkbox from '@mui/material/Checkbox';
import phone from "../../images/telephone.png"
import location from "../../images/location.png"
import img from "../../images/createMenuImg.png"
import calender from "../../images/check-mark.png"
import TextError from "../../formValidation/error";
import eyeglasses from "../../images/eyeglasses.png"
import percentage from "../../images/percentage.png"
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormControlLabel, Switch, styled } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ProfileValidation } from "../../formValidation/formValidation";
import { getProfileDetailsAPI } from "../../service/Collection";
import dayjs from "dayjs";
import Loader from "../loader/loader";
import { updateProfile } from "../../service/Collection";
import { updateTime } from "../../service/Collection";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { eventEmitter } from "../../utils/eventEmitter";

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
  const [openingTimes, setOpeningTimes] = useState([])
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState()
  const [countryCode, setCountryCode] = useState()
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    address: "",
    disableOrders: false,
    email: "",
    logo: "",
    phoneNumber: [],
    resturantBio: "",
    resturantName: "",
    timeZone: "",
  });

  const openChangePasswordDialog = () => {
    setChangePasswordOpen(true);
  };

  const closeChangePasswordDialog = () => {
    setChangePasswordOpen(false);
  };

  const handleDayCheckboxChange = (day) => (event) => {
    setOpeningTimes((prevOpeningTimes) => {
      const updatedOpeningTimes = prevOpeningTimes.map((time) => {
        if (time.day === day) {
          return {
            ...time,
            isClose: event.target.checked,
          };
        }
        return time;
      });
      return updatedOpeningTimes;
    });
  };

  const removeImage = () => {
    setProfileData((prevData) => ({
      ...prevData,
      logo: ""
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      event.target.value = null;
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prevData) => ({
          ...prevData,
          logo: URL.createObjectURL(file)
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber)
  }

  const handleCountryCode = (countryCode) => {
    setCountryCode(countryCode)
  }

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleOpenTimeChange = (newTime, timeIndex) => {
    const formattedTime = formatTime(newTime);
    const updatedOpeningTimes = [...openingTimes];
    updatedOpeningTimes[timeIndex].openTime = formattedTime;
    setOpeningTimes(updatedOpeningTimes);
  };

  const handleCloseTimeChange = (newTime, timeIndex) => {
    const formattedTime = formatTime(newTime);
    const updatedOpeningTimes = [...openingTimes];
    const newCloseTime = formattedTime;
    if (newCloseTime > updatedOpeningTimes[timeIndex].openTime) {
      updatedOpeningTimes[timeIndex].closeTime = newCloseTime;
      setOpeningTimes(updatedOpeningTimes);
    } else {
      console.error("Close time must be greater than open time");
      toast.error("Close time must be greater than open time", {
        theme: "colored",
      })
    }
  };

  const handleSubmit = async (values) => {
    try {
      await updateProfile({
        ...values,
        // id: values._id,
        logo: profileData?.logo,
        disableOrders: profileData?.disableOrders || false,
      });

      const formattedData = {
        idsToUpdate: [],
        newData: [],
      };

      openingTimes.forEach((time, index) => {
        const dayId = time._id;
        formattedData.idsToUpdate.push(dayId);
        formattedData.newData.push({
          openTime: time.openTime,
          closeTime: time.closeTime,
          isClose: time.isClose,
        });
      });

      const formattedPayload = {
        idsToUpdate: formattedData.idsToUpdate,
        newData: formattedData.newData,
      };

      await updateTime(formattedPayload);
      eventEmitter.dispatch('profileUpdated');
      toast.success("Profile updated successfully")
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong", {
        theme: "colored",
      })
    }
  };

  const getProfileDetails = async () => {
    setLoading(true)
    let res = await getProfileDetailsAPI();
    const fetchedData = res?.data?.restaurants[0];
    setProfileData(fetchedData);
    setOpeningTimes(res?.data?.openingTimes)
    setLoading(false)
  }

  useEffect(() => {
    getProfileDetails();
    const unsubscribe = eventEmitter.subscribe('profileUpdated', () => {
      getProfileDetails();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='profile'>
      {loading && (
        <Loader />
      )}

      {!loading && (
        <div >
          <div className='profile__topWrapper'>
            <p className='profile__title'>Profile</p>
            <button className='profile__changePassButton' onClick={openChangePasswordDialog}>CHANGE PASSWORD</button>
          </div>

          <div className='profile__centerBottom'>
            <div className='profile__centerWrapper'>
              <div className='profile__centerLeft'>
                <div className='profile__logoImgWrapper'>
                  {profileData?.logo ? (
                    <Avatar
                      src={profileData?.logo}
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
                  control={<IOSSwitch sx={{ m: 1 }} checked={profileData?.disableOrders} onChange={(event) => setProfileData((prevData) => ({ ...prevData, disableOrders: event.target.checked }))} />}
                  label="Disable Orders"
                  labelPlacement="start"
                  className='profile__switch'
                />
              </div>
            </div>

            <div className='profile__bottom'>
              <Formik
                initialValues={profileData}
                onSubmit={handleSubmit}
              >
                <Form className='profile__form'>
                  <div className='profile__formWrapper'>
                    <div className='profile__formLeft'>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={shop} alt="" className='profile__inputIcon' /><span>Restaurant Name</span></label>
                        <Field type="text" name="resturantName" placeholder="Enter restaurant name" autoComplete="off" className='profile__input' />
                        <ErrorMessage name="resturantName" component={TextError} className='profile__error' />
                      </div>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={email} alt="" className='profile__inputIcon' /><span>Mail Address</span></label>
                        <Field type="text" name="email" placeholder="Enter mail address" autoComplete="off" className='profile__input' />
                        <ErrorMessage name="email" component={TextError} className='profile__error' />
                      </div>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={location} alt="" className='profile__inputIcon' /><span>Address</span></label>
                        <Field type="text" name="address" placeholder="Enter address" autoComplete="off" className='profile__input' />
                        <ErrorMessage name="address" component={TextError} className='profile__error' />
                      </div>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={clock} alt="" className='profile__inputIcon' /><span>Time Zone</span></label>
                        <Field type="text" name="timeZone" placeholder="Enter time zone" autoComplete="off" className='profile__input' />
                        <ErrorMessage name="timeZone" component={TextError} className='profile__error' />
                      </div>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={phone} alt="" className='profile__inputIcon' /><span>Phone Number</span></label>
                        <div style={{ borderRadius: "8px", backgroundColor: "white", display: "flex", border: " 1px solid #F0F1F7"}}>
                          <PhoneInput
                            international
                            countryCodeEditable={false}
                            defaultCountry="IN"
                            country={'in'}
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={(phoneNumber, countryCode) => { handleNumber(phoneNumber); handleCountryCode(countryCode) }}
                            autoFocus={true}
                            name="phoneNumber"
                          />
                        </div>
                        <div style={{ borderRadius: "8px", backgroundColor: "white", display: "flex", border: " 1px solid #F0F1F7"}}>
                          <PhoneInput
                            international
                            countryCodeEditable={false}
                            defaultCountry="IN"
                            country={'in'}
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={(phoneNumber, countryCode) => { handleNumber(phoneNumber); handleCountryCode(countryCode) }}
                            autoFocus={true}
                            name="phoneNumber"
                          />
                        </div>
                        <ErrorMessage name="phoneNumber" component={TextError} className='profile__error' />
                      </div>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={eyeglasses} alt="" className='profile__inputIcon' /><span>Restaurant Bio</span></label>
                        <Field as="textarea" resize="none" name="resturantBio" placeholder="Enter restaurant bio" autoComplete="off" className='profile__restaurantBioInput' />
                        <ErrorMessage name="resturantBio" component={TextError} className='profile__error' />
                      </div>
                    </div>

                    <div className='profile__formRight'>
                      <div className='profile__inputWrapper'>
                        <label className='profile__label'><img src={dollar} alt="" className='profile__inputIcon' /><span>Currency</span></label>
                        <Field type="text" name="currency" placeholder="Enter currency" autoComplete="off" className='profile__input' />
                        <ErrorMessage name="currency" component={TextError} className='profile__error' />
                      </div>

                      <div className='profile__rightCharges'>
                        <div className='profile__inputWrapper'>
                          <label className='profile__label'><img src={percentage} alt="" className='profile__inputIcon' /><span>VAT %</span></label>
                          <Field type="text" name="vat" placeholder="Enter vat%" autoComplete="off" className='profile__rightChargesinput' />
                          <ErrorMessage name="vat" component={TextError} className='profile__error' />
                        </div>
                        <div className='profile__inputWrapper'>
                          <label className='profile__label'>Service Charge %</label>
                          <Field type="text" name="serviceCharge" placeholder="Enter service charge" autoComplete="off" className='profile__rightChargesinput' />
                          <ErrorMessage name="serviceCharge" component={TextError} className='profile__error' />
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {openingTimes?.map((time, index) => (
                          <>
                            <label className='profile__label'><img src={calender} alt="" className='profile__inputIcon' /><span>Opening Times</span></label>
                            <div style={{ display: "flex", flexDirection: "column" }} className='profile__dayContainer'>
                              <div key={time?._id} style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "end" }} className='profile__day'>
                                <div className='profile__daylabelWrapper'>
                                  <label className='profile__daylabel'>{time?.day.charAt(0).toUpperCase() + time?.day.slice(1)}</label>
                                </div>

                                <div style={{ display: "flex", gap: "25px", alignItems: "center" }} className='profile__dayTime'>
                                  <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <div style={{ width: "108px" }}>
                                        <MobileTimePicker
                                          label="Open Time"
                                          onChange={(newTime) => handleOpenTimeChange(newTime, index)}
                                          value={dayjs(`Fri May 03 2024 ${time?.openTime}:00`)}
                                          disabled={time?.isClose}
                                        />
                                      </div>
                                    </LocalizationProvider>
                                  </div>

                                  <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <div style={{ width: "108px" }}>
                                        <MobileTimePicker
                                          label="Close Time"
                                          onChange={(newTime) => handleCloseTimeChange(newTime, index)}
                                          value={dayjs(`Fri May 03 2024 ${time?.closeTime}:00`)}
                                          disabled={time?.isClose}
                                        />
                                      </div>
                                    </LocalizationProvider>
                                  </div>
                                  <div>
                                    <FormControlLabel
                                      control={<Checkbox color='warning' checked={time?.isClose} onChange={handleDayCheckboxChange(time?.day)} />}
                                      label="Close"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>

                  </div>
                  <div className='profile__update'>
                    <button type="submit" className='profile__updateBtn'>UPDATE</button>
                  </div>
                </Form>

              </Formik>

              <div>
                {changePasswordOpen && <ChangePassword open={changePasswordOpen} setOpen={setChangePasswordOpen} onClose={closeChangePasswordDialog} />}
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Profile