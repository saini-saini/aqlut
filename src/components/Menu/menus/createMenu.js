import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material';
import img from "../../../images/createMenuImg.png"
const CreateMenu = ({ open, setOpen, onClose }) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const MyButton = styled(Button)({
        '&:hover': {
            backgroundColor: 'inherit',
        },
    });

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    return (
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '499px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }}>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Create Menu</Dialog.Title>

                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>

                        <MyButton
                            onClick={() => console.log('clicked')}
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            sx={{ width: "135px", height: "114px", borderRadius: "10px", color: "#F55A2C", backgroundColor: "white", boxShadow: "0px 2px 8px 0px #00000040", borderRight: "20px" }}
                        >
                            <img src={img} alt="" style={{
                                width: "20px", height: "20px"
                            }} />
                            <VisuallyHiddenInput type="file" />
                        </MyButton>

                        <label style={{ width: "353px", height: "72px" }}>
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
                                    padding:"13px 20px"
                                }}
                                placeholder="enter name"
                            />
                        </label>
                        <label style={{ width: "352px", height: "72px" }}>
                            <Text as="div" size="2" mb="1" fontWeight="400" fontSize="12px" fontFamily="Montserrat">
                                Description
                            </Text>
                            <TextField.Root
                                style={{
                                    width: "352px",
                                    height: "48px",
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
                                    marginTop: "22px",
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

export default CreateMenu;
