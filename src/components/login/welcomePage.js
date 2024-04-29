import React from 'react'
import "./auth.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import RoomIcon from '@mui/icons-material/Room';
import { WelcomeValidation } from '../../formValidation/formValidation';
import TextError from '../../formValidation/error';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
const navigate = useNavigate();

const handleContinue = (values) => {
    navigate('/login')
    console.log(values)
}
    return (
        <div className='welcomeForm'>
            <Formik
            initialValues={{ location: '' }}
            onSubmit={handleContinue}
            validationSchema={WelcomeValidation}
            >
                <Form className='welcomeForm__content'>
                    <div className='welcomeForm__wrapper'>
                        <div className='welcomeForm__font'>
                            <h4 className='welcomeForm__title'>Welcome to Aqlut</h4>
                            <p className='welcomeForm__text'>Lorem Ipsum is simply dummy text of th printing and typesetting industry.</p>
                        </div>
                        <div className='welcomeForm__inputBtn'>
                            <div className='welcomeForm__inputWrapper'>
                                <label className='welcomeForm__label'>Location</label>
                                <Field type="text" name="location" placeholder="Enter your location" autoComplete="off" className='welcomeForm__input' />
                                {/* <RoomIcon color='warning' className='welcomeForm__locationIcon'/> */}
                                <ErrorMessage name="location" component={TextError} className='welcomeForm__error' />
                            </div>
                            <div className='welcomeForm__btnWrapper'>
                                <button type="submit" className='welcomeForm__button'>Continue</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default WelcomePage
