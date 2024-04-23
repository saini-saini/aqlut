import { Button, Dialog, Flex, Select, Text, TextField } from '@radix-ui/themes';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import QRCODE from "../../../images/QR code.png"
const CreateQRCode = ({ open, setOpen, onClose }) => {

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const [value, setValue] = React.useState('apple');

    const data = {
        apple: 'Apple',
        orange: 'Orange',
    };
    return (
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ padding: "30px 26px 17px 26px", width: '413px',  height:"544px",borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: " 0px 10px 30px 0px #00000040", position:"relative" }}>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Create QR Code</Dialog.Title>

                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>

                        <label style={{ width: "353px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                QR Code Name
                            </Text>
                            <TextField.Root
                                style={{
                                    width: "352px",
                                    height: "42px",
                                    borderRadius: "8px",
                                    outlineColor: "#F55A2C",
                                    border: "1px solid #F0F1F7"
                                }}
                                placeholder="enter qr code name"
                            />
                        </label>

                        <div className='createItem__inputWrapper'>
                            <label className='createItem__label'>Menus</label>
                            <Select.Root value={value} onValueChange={setValue}>
                            <Select.Trigger  style={{
                                    width: "352px",
                                    height: "42px",
                                    borderRadius: "10px",

                            }}>{data[value]}</Select.Trigger>
                            <Select.Content color='orange'>
                                <Select.Item value="apple">Apple</Select.Item>
                                <Select.Item value="orange">Orange</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </div>

                </Flex>

                <div style={{
                    isplay: "flex",
                    flexDirection: "column",
                    alignItems: "flexStart",
                    width: "100%",
                }}>

                    <div style={{marginTop:"13px"}}>
                    <Link to="/qrmenu"><span style={{ color: "#F55A2C", textDecoration: "underline", paddingLeft: "8px" }}>Generate QR Code</span></Link>
                    </div>

                    <p style={{
                        width: "152px",
                        height: "15px",
                        fontFamily: "Montserrat",
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "14.63px",
                        textAlign: "left",
                        paddingLeft: "8px",
                        margin: "20px 0px 0px 0px "

                    }}>Auto Generated QR Code</p>

                    <img src={QRCODE} alt="" style={{ width: "160px", height: "160px" }} />
                </div>

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
        </div >
    )
};

export default CreateQRCode;
