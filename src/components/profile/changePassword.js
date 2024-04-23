import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import "./profile.scss"
const ChangePassword = ({ open, setOpen, onClose }) => {

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    return (
        <div className='changePassword'>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '407px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow:" 0px 10px 30px 0px #00000040"}}>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px" }}>Change Password</Dialog.Title>
                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", gap:"20px" }}>
                        <label style={{ width: "353px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat" outlineColor="red">
                                Current Password
                            </Text>
                            <TextField.Root
                                placeholder="current password"
                            />
                        </label>
                        <label style={{ width: "352px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                New Password
                            </Text>
                            <TextField.Root
                                placeholder="new password"
                            />
                        </label>
                        <label style={{ width: "352px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                Confirm Password
                            </Text>
                            <TextField.Root
                                placeholder="confirm password"
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
                                    marginTop: "22px",
                                    cursor: "pointer",
                                    fontFamily:"Montserrat",
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

export default ChangePassword;
