import "./section.scss"
import React from 'react'
import Dialog from '@mui/material/Dialog';
import cardImg from "../../../images/image 1.png"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function ViewItem({ open, setOpen }) {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <React.Fragment>
                <BootstrapDialog
                    className='view'
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <div>
                        <img src={cardImg} alt="" style={{ width: "100%", height: "211px", borderRadius: '16px 0 0 0' }} />
                    </div>

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: -24,
                            top: -25,
                            color: 'white',
                            width: "48px",
                            height: "48px",
                            background: "black",
                            zIndex: "6"
                        }}
                        className='close'
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent className='view__contentWrapper'>
                        <div className='view__content'>
                            <h1 className='view__title'>Fast Food</h1>
                            <p className='view__info'>Desserts 102456 clas</p>
                        </div>
                        <p className='view__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </DialogContent>
                </BootstrapDialog>
            </React.Fragment>
        </div>
    )
}

export default ViewItem
