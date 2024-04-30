import "./sectionItem.scss"
import Avatar from '@mui/material/Avatar';
import img from "../../../images/createMenuImg.png"
import { Select } from 'antd';
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const CreateItem = () => {

    const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters', 'Staples', 'T-Shirts', 'Shoes'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className='createItem'>
            <div className='createItem__topWrapper'>
                <span className='createItem__title'>Create Items</span>
            </div>


            <div className='createItem__bottomWrapper'>
                <div className='createItem__bottomContent'>

                    <div style={{ display: "flex", gap: "25px", alignItems: "center", paddingBottom: "35px" }} className="createItem__bottomContentData">
                        <div className='createItem__image'>
                            {selectedImage ? (
                                <Avatar
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="logo"
                                    sx={{
                                        width: 135,
                                        height: 114,
                                        objectFit: "contain",
                                        borderRadius: "20px",
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: 135,
                                    height: 114,
                                    objectFit: "contain",
                                    borderRadius: "20px",
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

                        <div className='createItem__btnWrapper'>
                            <label htmlFor="imageInput" className='profile__changeBtn'>
                                change photo
                            </label>
                            <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                            <button className='createItem__removeBtn' onClick={() => setSelectedImage(null)}>remove photo</button>
                        </div>
                    </div>

                    <div className='createItem__formWrapper'>
                        <Formik>

                            <Form className='createItem__form'>

                                <div style={{ display: "flex", gap: "77px" }} className="createItem__formContent">

                                    <div className='createItem__formLeft'>
                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Name</label>
                                            <Field type="text" name="name" placeholder="Enter name" autoComplete="off" className='createItem__input' />
                                            <ErrorMessage name="name" component={""} className='createItem__error' />
                                        </div>

                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Menus</label>
                                            <Field name="color" as="select" className='customSelect'>
                                                <option value="red" className="option-red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            <ErrorMessage name="name" component={""} className='createItem__error' />
                                        </div>

                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Sort Order ID</label>
                                            <Field type="text" name="orderId" placeholder="Enter orderId" autoComplete="off" className='createItem__input' />
                                            <ErrorMessage name="orderId" component={""} className='createItem__error' />
                                        </div>

                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Description</label>
                                            <Field type="text" name="description" placeholder="Enter description" autoComplete="off" className='createItem__input' />
                                            <ErrorMessage name="description" component={""} className='createItem__error' />
                                        </div>
                                    </div>

                                    <div className='createItem__formRight'>
                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Sections</label>
                                            <Field name="color" as="select" className='customSelect'>
                                                <option value="red">Cake</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            <ErrorMessage name="name" component={""} className='createItem__error' />
                                        </div>

                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Price</label>
                                            <div 
                                            className="createItem__priceWrapper"
                                            style={{
                                                width: "437px",
                                                height: '319pxpx',
                                                border: "1px solid #F0F1F7",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px",
                                                padding: "7px",
                                                borderRadius: "7px"
                                            }}>
                                                <div 
                                                className="createItem__priceContent"
                                                style={{
                                                    width: "422px",
                                                    height: "70px",
                                                    border: "1px solid #F0F1F7",
                                                    display: "flex",
                                                    gap: "20px",
                                                    padding: "7px",
                                                    borderRadius: "7px"

                                                }}>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Name</label>
                                                        <Field type="text" name="name" placeholder="Enter name" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="name" component={""} className='createItem__error' />
                                                    </div>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Price</label>
                                                        <Field type="text" name="price" placeholder="Enter price" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="price" component={""} className='createItem__error' />
                                                    </div>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Calories</label>
                                                        <Field type="text" name="calories" placeholder="Enter calories" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="calories" component={""} className='createItem__error' />
                                                    </div>

                                                </div>

                                                <div 
                                                 className="createItem__priceContent"
                                                style={{
                                                    width: "422px",
                                                    height: "70px",
                                                    border: "1px solid #F0F1F7",
                                                    display: "flex",
                                                    gap: "20px",
                                                    padding: "7px",
                                                    borderRadius: "7px"

                                                }}>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Name</label>
                                                        <Field type="text" name="name" placeholder="Enter name" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="name" component={""} className='createItem__error' />
                                                    </div>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Price</label>
                                                        <Field type="text" name="price" placeholder="Enter price" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="price" component={""} className='createItem__error' />
                                                    </div>
                                                    <div className='createItem__inputWrapper'>
                                                        <label className='createItem__priceLabel'>Calories</label>
                                                        <Field type="text" name="calories" placeholder="Enter calories" autoComplete="off" className='createItem__priceiInput' />
                                                        <ErrorMessage name="calories" component={""} className='createItem__error' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div style={{ display: 'flex', flexDirection: "column", gap: "9px" }}>
                                            <label className='createItem__label'>Alergies</label>
                                            <Select
                                                mode="multiple"
                                                placeholder="Inserted are removed"
                                                value={selectedItems}
                                                onChange={setSelectedItems}
                                                style={{
                                                    width: '437px',
                                                    // height: '64px',
                                                }}
                                                className='customSelect'
                                                options={filteredOptions.map((item) => ({
                                                    value: item,
                                                    label: item,
                                                }))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='createItem__update'>
                                    <button className='createItem__updateBtn'>UPDATE</button>
                                </div>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateItem
