import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
const ForgetPassword = ({ open, setOpen, onClose }) => {

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    return (
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '250px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative" }}>
                    <Dialog.Title style={{ textAlign: 'center', width: "209px", height: "29px", fontWeight: "600", fontFamily: "sans-serif", fontSize: "24px", lineHeight: "29.26px" }}>Forget Password</Dialog.Title>
                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <label style={{ width: "326px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Root
                                style={{
                                    width: "326px",
                                    height: "48px",
                                    borderRadius: "8px",
                                    outlineColor: "#F55A2C",
                                }}
                                placeholder="Email"
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
                                    marginTop: "30px",
                                    cursor: "pointer",
                                }}
                            >Reset</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default ForgetPassword;
