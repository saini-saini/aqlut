import './profile.scss';
import close from "../../images/close (1).png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { ChangePasswordValidation } from '../../formValidation/formValidation';
const ChangePassword = ({ open, setOpen, onClose }) => {
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const togglePasswordVisibility = (field) => {
        switch (field) {
            case 'current':
                setCurrentPasswordVisible((prev) => !prev);
                break;
            case 'new':
                setNewPasswordVisible((prev) => !prev);
                break;
            case 'confirm':
                setConfirmPasswordVisible((prev) => !prev);
                break;
            default:
                break;
        }
    };

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: ChangePasswordValidation,
        onSubmit: values => {
            console.log("values:", values);
            formik.resetForm();
        },
    });

    return (
        <div className='changePassword'>
            <Dialog.Root open={open} onClose={onClose}>
                <Dialog.Content style={{ width: '413px', height: '407px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }} className='changePassword__wrapper'>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px" }}>Change Password</Dialog.Title>
                    <form onSubmit={formik.handleSubmit}>
                        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                            <label style={{ width: "353px", height: "72px" }} className='changePassword__labelWrapper'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" outlineColor="red">
                                    Current Password
                                </Text>
                                <Flex align="center">
                                    <TextField.Root
                                        placeholder="current password"
                                        id="currentPassword"
                                        name="currentPassword"
                                        type={currentPasswordVisible ? "text" : "password"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.currentPassword}
                                        className='changePassword__input'
                                        autoComplete="off"
                                        
                                    />
                                    <div className='changePassword__eyeicon'>
                                        {currentPasswordVisible ? (
                                            <VisibilityIcon onClick={() => togglePasswordVisibility('current')} />
                                        ) : (
                                            <VisibilityOffIcon onClick={() => togglePasswordVisibility('current')} />
                                        )}
                                    </div>
                                </Flex>
                                {formik.touched.currentPassword && formik.errors.currentPassword && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.currentPassword}</Text>}
                            </label>
                            <label style={{ width: "352px", height: "72px" }} className='changePassword__labelWrapper'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    New Password
                                </Text>
                                <Flex align="center">
                                    <TextField.Root
                                        placeholder="new password"
                                        id="newPassword"
                                        name="newPassword"
                                        type={newPasswordVisible ? "text" : "password"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.newPassword}
                                        className='changePassword__input'
                                    />
                                    <div className='changePassword__eyeicon'>
                                        {newPasswordVisible ? (
                                            <VisibilityIcon onClick={() => togglePasswordVisibility('new')} />
                                        ) : (
                                            <VisibilityOffIcon onClick={() => togglePasswordVisibility('new')} />
                                        )}
                                    </div>
                                </Flex>
                                {formik.touched.newPassword && formik.errors.newPassword && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.newPassword}</Text>}
                            </label>
                            <label style={{ width: "352px", height: "72px" }} className='changePassword__labelWrapper'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Confirm Password
                                </Text>
                                <Flex align="center">
                                    <TextField.Root
                                        placeholder="confirm password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                        className='changePassword__input'
                                    />
                                    <div className='changePassword__eyeicon'>
                                        {confirmPasswordVisible ? (
                                            <VisibilityIcon onClick={() => togglePasswordVisibility('confirm')} />
                                        ) : (
                                            <VisibilityOffIcon onClick={() => togglePasswordVisibility('confirm')} />
                                        )}
                                    </div>
                                </Flex>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.confirmPassword}</Text>}
                            </label>
                        </Flex>
                        <Dialog.Close style={{ width: "48px", height: "48px", backgroundColor: 'black' }}>
                            <img src={close} alt="" onClick={handleClose} style={{ width: "48px", height: "48px", position: "absolute", top: "-24px", right: "-22px", cursor: "pointer", padding: "10px", borderRadius: "50%" }} />
                        </Dialog.Close>
                        <Flex justify="center">
                            <Dialog.Close>
                                <Button
                                    type="submit"
                                    style={{
                                        width: "117px",
                                        height: "42px",
                                        borderRadius: "10px",
                                        backgroundColor: "#F55A2C",
                                        color: "white",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        lineHeight: "17.7px",
                                        textTransform: "uppercase",
                                        marginTop: "22px",
                                        cursor: "pointer",
                                        fontFamily: "Montserrat",
                                        boxShadow: "0px 2px 16px 0px #3D6BC040"
                                    }}
                                >SUBMIT</Button>
                            </Dialog.Close>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default ChangePassword;
