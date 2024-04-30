import "./qr.scss"
import EditQRCode from './editQR_Code';
import CreateQRCode from './createQR_Code';
import BrushIcon from '@mui/icons-material/Brush';
import exportIcon from "../../../images/export.png";
import DeleteIcon from '@mui/icons-material/Delete';
import filterIcon from "../../../images/filter.png";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import searchIcon from "../../../images/search (3).png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Input, Table } from 'antd';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const QRCodes = () => {

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

  const navigate = useNavigate();

  const [createQROpen, setCreateQROpen] = useState(false);
  const [editQROpen, setEditQROpen] = useState(false);

  const openCreateQRDialog = () => {
    setCreateQROpen(true);
  };

  const closeCreateQRDialog = () => {
    setCreateQROpen(false);
  };

  const openEditQRDialog = () => {
    setEditQROpen(true);
  };

  const closeEditQRDialog = () => {
    setEditQROpen(false);
  };
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
    { dataIndex: 'qrCodeName', title: 'QR Code Name', width: 120 },
    { dataIndex: 'qrSource', title: 'QR Source', width: 140 },
    {
      dataIndex: 'groupName',
      title: 'Group Name',
      width: 110,
    },
    {
      dataIndex: 'qrCode',
      title: 'QR Code',
      width: 110,
    },
    {
      dataIndex: 'action',
      title: 'Action',
      width: 170,
    },
  ];

  const data = [];
  for (let i = 0; i < 2; i++) {
    data.push({
      key: i,
      qrCodeName: `Table ${i}`,
      qrSource: "Dine In",
      groupName: "Outside Tables",
      qrCode: <QrCode2Icon />,
      action: <div style={{ display: "flex", gap: "45px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "13px", alignItems: "center", cursor: "pointer" }}>
          <VisibilityIcon />
          <BrushIcon color='warning' onClick={openEditQRDialog} />
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
    <div className='QRCode'>
      <div className='QRCode__topWrapper'>
        <span className='QRCode__title'>QR Codes</span>
        <button className='QRCode__createButton' onClick={openCreateQRDialog}>CREATE QR CODE</button>
      </div>

      <div className='QRCode__bottomWrapper'>
        <div className='QRCode__bottom' style={{
          maxHeight: '438px', overflowY: 'auto', boxShadow: "0px 2px 8px 0px #3D6BC047", backgroundColor: "white", borderRadius: "10px"
        }}>

          <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "13px", padding: "15px 17px 12px 27px" }} className="QRCode__tableTop">
            <Input prefix={<img src={searchIcon} alt="" style={{ width: "12px", height: "12px" }} />} placeholder="Search" style={{ width: "281px", height: "42px", backgroundColor: "#FFFFFF", boxShadow: "0px 2px 8px 0px #00000047" }}className="QRCode__search" />
            <div style={{ display: "flex", gap: "10px" }} className="QRCode__filter">
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

            <div className="QRCode__upload">
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
          </div>
            </div>
          <Table
            columns={columns}
            dataSource={data}
            className='QRCode__table'
            size='small'
            scroll={{
              y: 240,
            }}
            style={{ padding: "0px 0px 11px 20px" }}
            pagination={true}
            rowClassName={() => 'QRCode__customRow'}
          />
        </div>

      </div>

      {createQROpen && <CreateQRCode open={createQROpen} setOpen={setCreateQROpen} onClose={closeCreateQRDialog} />}
      {editQROpen && <EditQRCode open={editQROpen} setOpen={setEditQROpen} onClose={closeEditQRDialog} />}

    </div>
  )
}

export default QRCodes



