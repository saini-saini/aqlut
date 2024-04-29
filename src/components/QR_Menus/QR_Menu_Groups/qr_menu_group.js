import "./qr_menu.scss"
import BrushIcon from '@mui/icons-material/Brush';
import exportIcon from "../../../images/export.png"
import filterIcon from "../../../images/filter.png"
import DeleteIcon from '@mui/icons-material/Delete';
import searchIcon from "../../../images/search (3).png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Input, Table } from 'antd';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { FormControlLabel, Switch, styled } from '@mui/material'

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 20,
  padding: 0,
  margin: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2.4,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15,
    height: 15,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const QRMenuGroup = () => {

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
        width: '120px',
        height: "42px",
        borderRadius: '10px',
        boxShadow: "0px 2px 8px 0px #00000047",
      }}
      type="button"
    >
      <div
        style={{
          marginTop: 8,
        }}
      >
        <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <img src={exportIcon} alt="" style={{
            width: "20px", height: "20px"
          }} /><span style={{ color: "#A1A1A1", fontFamily: "Montserrat", fontSize: "14px", fontWeight: "600", lineHeight: "17.07px", textAlign: "left" }}>Export</span>
        </div>

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


  const columns = [
    { dataIndex: 'groupType', title: 'Group Type', width: 190 },
    { dataIndex: 'groupName', title: 'Group Name', width: 190 },
    {
      dataIndex: 'action',
      title: 'Action',
      width: 110,
    },
  ];


  const data = [];
  for (let i = 0; i < 2; i++) {
    data.push({
      key: i,
      groupType: `Dine In`,
      groupName: "Outside Tables",
      action: <div style={{ display: "flex", gap: "45px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "13px", alignItems: "center", cursor: "pointer" }}>
          <VisibilityIcon />
          <BrushIcon color='warning' />
          <DeleteIcon />
        </div>
        <div>
          <FormControlLabel
            style={{ width: "13px", height: "20px" }}
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            className='profile__switch'
          />
        </div>
      </div>,
    });
  }

  return (
    <div className='QRMenuGroup'>
      <div className='QRMenuGroup__topWrapper'>
        <span className='QRMenuGroup__title'>QR Menu Groups</span>
        <button className='QRMenuGroup__createButton' >CREATE MENU GROUP</button>
      </div>

      <div className='QRMenuGroup__bottomWrapper'>
        <div style={{
          maxHeight: '438px', overflowY: 'auto', boxShadow: "0px 2px 8px 0px #3D6BC047", backgroundColor: "white", borderRadius: "10px"
        }}>

          <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "13px", padding: "15px 17px 12px 27px" }}>
            <Input prefix={<img src={searchIcon} alt="" style={{ width: "12px", height: "12px" }} />} placeholder="Search" style={{ width: "281px", height: "42px", backgroundColor: "#FFFFFF", boxShadow: "0px 2px 8px 0px #00000047" }} />

            <button style={{
              width: "120px",
              height: "42px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "white",
              boxShadow: " 0px 2px 8px 0px #00000047",
            }}>
              <div style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
                <img src={filterIcon} alt="" style={{ width: "20px", height: "20px" }} /><span style={{ color: "#A1A1A1", fontFamily: "Montserrat", fontSize: "14px", fontWeight: "600", lineHeight: "17.07px", textAlign: "left" }}>Filter</span>
              </div>
            </button>


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
          </div>
          <Table
            columns={columns}
            dataSource={data}
            size='small'
            scroll={{
              y: 240,
            }}
            style={{ padding: "0px 0px 11px 20px" }}
            pagination={true}
            rowClassName={() => 'QRMenuGroup__customRow'}
          />
        </div>

      </div>


    </div>
  )
}

export default QRMenuGroup



