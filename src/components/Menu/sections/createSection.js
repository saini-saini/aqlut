import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import img from "../../../images/createMenuImg.png"
import { Select } from 'antd';
import { message, Upload } from 'antd';

const CreateSection = ({ open, setOpen, onClose }) => {
    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const handleSelectChange = (value) => {
        console.log(`selected ${value}`);
    };

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
                border: 0,
                background: 'white',
                width: '135px',
                height: "114px",
                borderRadius: '20px',
                boxShadow: "0px 2px 8px 0px #00000040",
            }}
            type="button"
        >
            <div
                style={{
                    marginTop: 8,
                }}
            >
                <img src={img} alt="" style={{
                    width: "20px", height: "20px"
                }} />
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
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '450px', height: '704px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }}>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Create Section</Dialog.Title>

                    <div style={{ paddingBottom: "25px" }}>

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
                    </div>

                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                        <label style={{ width: "353px", height: "66px" }}>
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
                                    padding:"13px 20px"
                                }}
                                placeholder="enter section"
                            />
                        </label>

                        <label style={{ width: "353px", height: "66px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                Menus
                            </Text>
                            <Select
                                defaultValue="lucy"
                                onChange={handleSelectChange}
                                style={{ width: "352px", height: "42px", borderRadius: "8px", outlineColor: "#F55A2C", border: "1px solid #F0F1F7" }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </label>

                        <label style={{ width: "353px", height: "66px" }}>
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
                                    padding:"13px 20px"
                                }}
                                placeholder="enter section"
                            />
                        </label>

                        <label style={{ width: "352px", height: "126px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                Description
                            </Text>
                            <TextField.Root
                                style={{
                                    width: "352px",
                                    height: "102px",
                                    borderRadius: "8px",
                                    outlineColor: "#F55A2C",
                                    border: "1px solid #F0F1F7",
                                    padding:"13px 20px"
                                }}
                                placeholder="enter description"
                                multiline={true}
                                rows={4}
                            />
                        </label>

                    </Flex>

                    <Dialog.Close style={{ width: "48px", height: "48px" }}>
                        <CancelIcon onClick={handleClose} style={{ position: "absolute", top: "0px", right: "0px", cursor: "pointer" }} />
                    </Dialog.Close>

                    <Flex justify="center">

                        <Dialog.Close>
                            <Button
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
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default CreateSection;
