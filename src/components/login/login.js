import React, { useState } from 'react'
import "./auth.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import RoomIcon from '@mui/icons-material/Room';
import TextError from '../../formValidation/error';
import { LoginValidation } from '../../formValidation/formValidation';
import ForgetPassword from './forgetPassword';

const Login = () => {
    const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);

    const openForgetPasswordDialog = () => {
        setForgetPasswordOpen(true);
    };

    const closeForgetPasswordDialog = () => {
        setForgetPasswordOpen(false);
    };

    return (
        <div className='loginForm'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginValidation}
                onSubmit={values => console.log(values)}>
                <Form className='loginForm__content'>
                    <div className='loginForm__wrapper'>
                        <div className='loginForm__font'>
                            <h4 className='loginForm__title'>Login to your account</h4>
                        </div>
                        <div className='loginForm__inputBtn'>
                            <div className='loginForm__inputWrapper'>
                                <label className='loginForm__label'>Email</label>
                                <Field type="text" name="email" placeholder="Email" autoComplete="off" className='loginForm__input' />
                                <ErrorMessage name="email" component={TextError} className='loginForm__error' />
                            </div>
                            <div className='loginForm__inputWrapper'>
                                <label className='loginForm__label'>Password</label>
                                <Field type="text" name="password" placeholder="Password" autoComplete="off" className='loginForm__input' />
                                {/* <RoomIcon color='warning' className='loginForm__locationIcon'/> */}
                                <ErrorMessage name="password" component={TextError} className='loginForm__error' />
                                <p className='loginForm__forgotTxt' onClick={openForgetPasswordDialog}>Forgot Password?</p>
                            </div>
                            <div className='loginForm__btnWrapper'>
                                <button type="submit" className='loginForm__button'>SIGN IN</button>
                                <p className='loginForm__contactUsText'>Don't have an account? <a href="#" style={{ textDecoration: "none" }}><span style={{ color: "#F55A2C" }}>Contact Us</span></a></p>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            {forgetPasswordOpen && <ForgetPassword open={forgetPasswordOpen} setOpen={setForgetPasswordOpen}  onClose={closeForgetPasswordDialog} />}
        </div>
    )
}

export default Login
