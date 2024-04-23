import React, { useState } from 'react'
import { Flex } from '@radix-ui/themes';
import { message, Upload } from 'antd';
import img from "../../../images/createMenuImg.png"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Select } from 'antd';
import "./sectionItem.scss"

const CreateItem = () => {

    const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters', 'Staples', 'T-Shirts','Shoes'];
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));




    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button
            style={{
                background: 'white',
                width: '195px',
                height: "42px",
                borderRadius: '10px',
                border: "1px solid #F55A2C",
                boxShadow: "0px 2px 16px 0px #3D6BC040",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            type="button"
        >
            <div
                style={{
                    marginTop: 8,
                }}
            >
                <p style={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "17.07px",
                    color: "#F55A2C",

                }}>CHANGE PHOTO</p>
            </div>

        </button>
    );

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    return (
        <div className='createItem'>
            <div className='createItem__topWrapper'>
                <span className='createItem__title'>Create Items</span>
            </div>


            <div className='createItem__bottomWrapper'>
                <div className='createItem__bottomContent'>

                    <div style={{ display: "flex", gap: "25px", alignItems: "center", paddingBottom: "35px" }}>
                        <div className='createItem__image'>
                            <img src={img} alt="" style={{
                                width: "20px", height: "20px"
                            }} />
                        </div>

                        <div className='createItem__btnWrapper'>
                            {/* <button className='createItem__changeBtn'>change photo</button> */}
                            <Flex gap="middle" wrap="wrap">
                                <Upload
                                    name="avatar"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>
                            </Flex>

                            <button className='createItem__removeBtn'>remove photo</button>
                        </div>
                    </div>

                    <div className='createItem__formWrapper'>
                        <Formik>

                            <Form className='createItem__form'>

                                <div style={{ display: "flex", gap: "99px" }}>

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
                                            <Field name="color" as="select">
                                                <option value="red">Cake</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            <ErrorMessage name="name" component={""} className='createItem__error' />
                                        </div>

                                        <div className='createItem__inputWrapper'>
                                            <label className='createItem__label'>Price</label>
                                            <div style={{
                                                width: "437px",
                                                height: '319pxpx',
                                                border: "1px solid #F0F1F7",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px",
                                                padding: "7px",
                                                borderRadius: "7px"
                                            }}>
                                                <div style={{
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

                                                <div style={{
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


                                        <div style={{display:'flex', flexDirection:"column", gap:"9px"}}>
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
