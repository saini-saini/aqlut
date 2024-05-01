import "./auth.scss"
import React from 'react';
import close from "../../images/close (1).png";
import { useFormik } from 'formik';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { ForgetPasswordValidation } from '../../formValidation/formValidation';

const ForgetPassword = ({ open, setOpen, onClose }) => {
    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: ForgetPasswordValidation,
        onSubmit: values => {
            console.log("Reset password for email:", values.email);
            formik.resetForm();
        },
    });

    return (
        <div className='forgetPassword'>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '250px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative" }} className='forgetPassword'>
                    <Dialog.Title style={{ textAlign: 'center', width: "209px", height: "29px", fontWeight: "600", fontFamily: "sans-serif", fontSize: "24px", lineHeight: "29.26px" }}>Forget Password</Dialog.Title>
                    <form onSubmit={formik.handleSubmit}>
                        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <label style={{ width: "326px", height: "72px" }} className='label'>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Email
                                </Text>
                                <TextField.Root
                                    style={{
                                        width: "100%",
                                        height: "48px",
                                        borderRadius: "8px",
                                        outlineColor: "#F55A2C",
                                    }}
                                    className='forgetPassword__input'
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.email}</Text>}
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
                                        marginTop: "30px",
                                        cursor: "pointer",
                                    }}
                                >Reset</Button>
                            </Dialog.Close>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default ForgetPassword;
