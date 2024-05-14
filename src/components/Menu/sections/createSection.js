import "./section.scss"
import Avatar from '@mui/material/Avatar';
import close from "../../../images/close (1).png"
import img from "../../../images/createMenuImg.png"
// import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Button, Dialog, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import { createSectionAPI, getAllMenuAPI } from "../../../service/Collection";
import { useFormik } from "formik";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select } from '@radix-ui/themes';
import { eventEmitter } from '../../../utils/eventEmitter';

const CreateSection = ({ open, setOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const handleSelectChange = (value) => {
        console.log(`Selected menu ID: ${value}`);
        formik.setFieldValue('menuId', value);
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
            imageUrl: null,
            menuId: '',
        },
        // validationSchema: CreateMenuValidation,
        onSubmit: async (values) => {
            try {
                const selectedMenuItem = menuItems?.find(menu => menu?.name === values?.menuId);
                if (selectedMenuItem) {
                    values.menuId = selectedMenuItem?._id;
                }
                const formData = new FormData();
                formData.set('name', values?.name);
                formData.set('description', values?.description);
                formData.append('imageUrl', values?.imageUrl);
                formData.set('menuId', values?.menuId);
                formData.set('sortOrderId', values?.sortOrderId);
                await createSectionAPI(formData);
                // console.log("section created successfully!", {
                //     section: values.name,
                //     description: values.description,
                //     imageUrl: values.imageUrl,
                //     menuId: values.menuId,
                //     sortOrderId:values.sortOrderId,
                // });
                // toast.success("Section created successfully")
                eventEmitter.dispatch('sectionCreated');
                formik.resetForm();
                setSelectedImage(null);
                handleClose();
            } catch (error) {
                console.error("Error creating section:", error);
                // toast.error("Something went wrong", {
                //     theme: "colored",
                // })
            }
        },
    });

    const getMenuDetails = async () => {
        let res = await getAllMenuAPI();
        setMenuItems(res.data)
    }

    useEffect(() => {
        getMenuDetails()
    }, [])

    return (
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '450px', height: '704px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }} className='createSectionContainer'>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Create Section</Dialog.Title>

                    <form onSubmit={formik.handleSubmit}>
                        <div style={{ paddingBottom: "25px" }}>
                            <Flex gap="middle" wrap="wrap">
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
                            </Flex>
                        </div>

                        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                            <label style={{ width: "353px", height: "66px" }} className='createSectionLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Section
                                </Text>
                                <TextField.Root
                                    style={{
                                        width: "352px",
                                        height: "42px",
                                        borderRadius: "8px",
                                        outlineColor: "#F55A2C",
                                        border: "1px solid #F0F1F7",
                                        padding: "13px 20px"
                                    }}
                                    placeholder="enter section"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.section && <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red">{formik.errors.name}</Text>}
                            </label>

                            <label style={{ width: "353px", height: "66px" }} className='createSectionLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Menus
                                </Text>
                                <Select.Root value={formik.values.menuId} onValueChange={(value) => formik.setFieldValue('menuId', value)}>
                                    <Select.Trigger
                                        className="createQRselect"
                                        style={{
                                            width: "352px",
                                            height: "42px",
                                            borderRadius: "10px",
                                        }}>
                                        {formik.values.menuId ? formik.values.menuId : 'Select Menu'}
                                    </Select.Trigger>
                                    <Select.Content color='orange'>
                                        {menuItems?.map(menu => (
                                            <Select.Item key={menu._id} value={menu.name}>{menu.name}</Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Root>
                            </label>


                            <label style={{ width: "353px", height: "66px" }} className='createSectionLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Sort Order ID
                                </Text>
                                <TextField.Root
                                    style={{
                                        width: "352px",
                                        height: "42px",
                                        borderRadius: "8px",
                                        outlineColor: "#F55A2C",
                                        border: "1px solid #F0F1F7",
                                        padding: "13px 20px"
                                    }}
                                    placeholder="enter section"
                                    id="sortOrderId"
                                    name="sortOrderId"
                                    value={formik.values.sortOrderId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.sortOrderId && formik.errors.sortOrderId && <Text as="div" size="2" fontWeight="400" fontSize="12px" fontFamily="Montserrat" color="red" >{formik.errors.sortOrderId}</Text>}
                            </label>

                            <label style={{ width: "352px", height: "126px" }} className='createSectionLabel'>
                                <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                    Description
                                </Text>
                                <TextArea
                                    style={{
                                        width: "352px",
                                        height: "102px",
                                        borderRadius: "8px",
                                        outline: "none",
                                        border: "1px solid #F0F1F7",
                                        padding: "13px 20px"
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
                                        marginTop: "17px",
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
        </div >
    );
};

export default CreateSection;
