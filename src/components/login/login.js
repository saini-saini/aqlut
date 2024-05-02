import "./auth.scss"
import ForgetPassword from './forgetPassword';
import TextError from '../../formValidation/error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'
import { loginApi } from "../../api/login";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { LoginValidation } from '../../formValidation/formValidation';

const Login = () => {
    const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const openForgetPasswordDialog = () => {
        setForgetPasswordOpen(true);
    };

    const closeForgetPasswordDialog = () => {
        setForgetPasswordOpen(false);
    }

    const handlesubmit = async (values) => {
        try {
            console.log(values)
            const response = await loginApi({
                email: values.email,
                password: values.password
            });
            console.log(response.data);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className='loginForm'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginValidation}
                onSubmit={handlesubmit}>
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
                                <Field type={showPassword ? "text" : "password"} name="password" placeholder="Password" autoComplete="off" className='loginForm__input' />
                                <ErrorMessage name="password" component={TextError} className='loginForm__error' />
                                <div className="loginForm__eyeicon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </div>
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
            {forgetPasswordOpen && <ForgetPassword open={forgetPasswordOpen} setOpen={setForgetPasswordOpen} onClose={closeForgetPasswordDialog} />}
        </div>
    )
}

export default Login
