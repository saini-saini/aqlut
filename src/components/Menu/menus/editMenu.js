import Avatar from '@mui/material/Avatar';
import close from "../../../images/close (1).png"
import img from "../../../images/createMenuImg.png"
import React, { useState } from 'react';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
const EditMenu = ({ open, setOpen, onClose }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };

    const handleSubmit = () => {
        if (!selectedImage) {
            console.log("Image not uploaded.");
            return;
        }
        console.log("values:", {
            name: name,
            description: description,
            image: selectedImage
        });
        setName("");
        setDescription("");
        setSelectedImage(null);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div>
            <Dialog.Root open={open} onClose={onClose} >
                <Dialog.Content style={{ width: '413px', height: '499px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: "relative", boxShadow: " 0px 10px 30px 0px #00000040" }}>
                    <Dialog.Title style={{ textAlign: 'center', width: "223px", height: "29px", fontWeight: "600", fontFamily: "Montserrat", fontSize: "24px", lineHeight: "29.26px", marginBottom: " 18px" }}>Edit Menu</Dialog.Title>

                    <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                            <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
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

                            </label>
                            <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                        </div>

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
                                    padding: "13px 20px"
                                }}
                                placeholder="enter name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
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
                                    padding: "13px 20px"
                                }}
                                placeholder="enter description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                multiline={true}
                                rows={4}
                            />
                        </label>

                    </Flex>

                    <Dialog.Close style={{ width: "48px", height: "48px", backgroundColor: 'black' }}>
                        <img src={close} alt="" onClick={handleClose} style={{ width: "48px", height: "48px", position: "absolute", top: "-24px", right: "-22px", cursor: "pointer", padding: "10px", borderRadius: "50%" }} />
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
                                onClick={handleSubmit}
                            >SUBMIT</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default EditMenu;
