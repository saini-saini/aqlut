import './style.scss';
import Avatar from '@mui/material/Avatar';
import close from "../../../images/close (1).png";
import img from "../../../images/createMenuImg.png";
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Dialog, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import { CreateMenuValidation } from '../../../formValidation/formValidation';
import { createMenuAPI } from '../../../service/Collection';
import { eventEmitter } from '../../../utils/eventEmitter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateMenu = ({ open, setOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        formik.setFieldValue('imageUrl', file);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            imageUrl: null
        },
        validationSchema: CreateMenuValidation,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.set('name', values?.name);
                formData.set('description', values?.description);
                formData.append('imageUrl', values?.imageUrl); 
                await createMenuAPI(formData);
                // console.log("Menu created successfully!", formData);
                eventEmitter.dispatch('menuCreated');
                formik.resetForm();
                setSelectedImage(null);
                handleClose();
            } catch (error) {
                console.error("Error creating menu:", error);
                // toast.error("Something went wrong", {
                //     theme: "colored",
                // })
            }
        },
    });

    return (
        <div className='createMenu'>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '499px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }} className='createMenuContainer'>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Create Menu</Dialog.Title>
                    <form onSubmit={formik.handleSubmit}>
                        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                                <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
                                    {selectedImage ? (
                                        <Avatar
                                            src={URL.createObjectURL(selectedImage)}
                                            alt="logo"
                                            sx={{ width: 135, height: 114, objectFit: "contain", borderRadius: "20px", }}
                                        />
                                    ) : (
                                        <div style={{ width: 135, height: 114, objectFit: "contain", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 8px 0px #00000040", }}>
                                            <img src={img} alt="" style={{ width: "20px", height: "20px" }} />
                                        </div>
                                    )}
                                </label>
                                <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                            </div>
                            {formik.touched.imageUrl && formik.errors.imageUrl && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.imageUrl}</Text>}

                            <label style={{ width: "353px", height: "72px" }} className='createMenuLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Name
                                </Text>
                                <TextField.Root
                                    style={{
                                        width: "352px",
                                        height: "48px",
                                        borderRadius: "8px",
                                        outlineColor: "#F55A2C",
                                        border: "1px solid #F0F1F7",
                                        padding: "13px 20px"
                                    }}
                                    className='createMenu__input'
                                    placeholder="enter name"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && <Text as="div" size="2" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red" >{formik.errors.name}</Text>}
                            </label>
                            <label style={{ width: "352px", height: "72px" }} className='createMenuLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" >
                                    Description
                                </Text>
                                <TextArea
                                    style={{
                                        width: "352px",
                                        height: "48px",
                                        borderRadius: "8px",
                                        outline: "none",
                                        border: "1px solid #F0F1F7",
                                        padding: "13px 20px",
                                    }}
                                    placeholder="enter description"
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.description && formik.errors.description && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.description}</Text>}
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
                                        marginTop: "48px",
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

export default CreateMenu;
