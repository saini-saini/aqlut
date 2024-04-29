import "./sectionItem.scss"
import Avatar from '@mui/material/Avatar';
import BrushIcon from '@mui/icons-material/Brush';
import exportIcon from "../../../images/export.png"
import filterIcon from "../../../images/filter.png"
import filter from "../../../images/filter (1).png"
import DeleteIcon from '@mui/icons-material/Delete';
import searchIcon from "../../../images/search (3).png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Drawer } from 'antd';
import { message, Upload } from 'antd';
import React, { useState } from 'react'
import { Input, Table, Select } from 'antd';
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

const SectionItems = () => {

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const [imageUrl, setImageUrl] = useState();
  const UploadHandleChange = (info) => {
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
    { dataIndex: 'orderId', title: 'Sort Order ID', width: 120 },
    { dataIndex: 'name', title: 'Name', width: 140 },
    {
      dataIndex: 'menus',
      title: 'Menus',
      width: 110,
    },
    {
      dataIndex: 'sections',
      title: 'Sections',
      width: 100,
    },
    {
      dataIndex: 'price',
      title: 'Price',
      width: 110,
    },
    {
      dataIndex: 'action',
      title: 'Action',
      width: 170,
    },
  ];

  const data = [];
  for (let i = 0; i < 300; i++) {
    data.push({
      key: i,
      orderId: `000${i}`,
      name:
        <div style={{ display: "flex", gap: "10px" }}>
          <Avatar alt="Remy Sharp" src="" style={{ width: "24px", height: "24px" }} />
          {"French Fries"}
        </div>,
      menus: "Desserts",
      sections: `Cake `,
      price: "Single",
      action: <div style={{ display: "flex", gap: "45px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "13px", alignItems: "center", cursor: "pointer" }}>
          <VisibilityIcon />
          <BrushIcon color='warning' />
          <DeleteIcon />
        </div>
        <div>
          <FormControlLabel
            style={{ width: "13px", height: "20px" }}
            control={<IOSSwitch sx={{ m: 1 }} />}
            className='profile__switch'
          />
        </div>
      </div>,
    });
  }

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='sectionItem'>
      <div className='sectionItem__topWrapper'>
        <p className='sectionItem__title'>Section Items</p>
        <button className='sectionItem__createButton' onClick={() => navigate('/home/menus/create_item')}>CREATE</button>
      </div>

      <div className='sectionItem__bottomWrapper'>
        <div className='sectionItem__bottom' style={{
          maxHeight: '442px', boxShadow: "0px 2px 8px 0px #3D6BC047", backgroundColor: "white", borderRadius: "10px"
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
            }}
              onClick={showDrawer}>
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
              onChange={UploadHandleChange}
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
            className='sectionItem__table'
            size='small'
            scroll={{
              y: 240,
            }}
            style={{ padding: "0px 0px 11px 20px" }}
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '20', '50'],
            }}
            rowClassName={() => 'sectionItem__customRow'}
          />
        </div>

      </div>

      <Drawer
        title={
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img src={filter} alt="" style={{ width: "20px", height: "20px" }} /><span style={{ color: "black", fontFamily: "Montserrat", fontWeight: "600", lineHeight: "17.07px", textAlign: "left", fontSize: "12px", display: 'flex', gap: "2px" }}>Filter <div style={{ color: "white", backgroundColor: "#F23D3D", width: '16px', height: '16px', borderRadius: '50%', textAlign: "center", padding: "0px 5px 0px 5px" }}>3</div></span>
          </div>
        }
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      // style={{ width: "398px" }}
      >
        <div style={{ display: 'flex', flexDirection: "column", gap: "34px" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <p style={{
                margin: "0px",
                fontFamily: "Montserrat",
                fontSize: "13px",
                fontWeight: '600',
                lineHeight: "20px",
                textAlign: "left",

              }}>Mark Section as New</p>
              <FormControlLabel
                sx={{ marginRight: "7px" }}
                control={<IOSSwitch defaultChecked />}
                className='sectionItem__switch'
              />

            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <p style={{
                margin: "0px",
                fontFamily: "Montserrat",
                fontSize: "13px",
                fontWeight: '600',
                lineHeight: "20px",
                textAlign: "left",

              }}>Mark Section as Signature</p>
              <FormControlLabel
                sx={{ marginRight: "7px" }}
                control={<IOSSwitch defaultChecked />}
                className='profile__switch'
              />
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: "7px" }}>
              <label >Price</label>
              <div style={{ display: "flex", gap: "13px" }}>
                <div>
                  <Input placeholder="price" style={{
                    width: "177px",
                    height: "44px",
                    borderRadius: "8px",

                  }} />
                </div>

                <div>
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 155,
                      height: 44,
                      borderRadius: "8px",
                    }}
                    onChange={handleChange}
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
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: "7px" }}>
              <p style={{
                margin: "0px",
                fontFamily: "Montserrat",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "20px",
                textAlign: "left",


              }}>Recommended Items</p>

              <Select
                defaultValue="lucy"
                style={{
                  width: 345,
                  height: 44,
                  borderRadius: "8px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Don’t have recommended items',
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

            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: "7px" }}>
              <p style={{
                margin: "0px",
                fontFamily: "Montserrat",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "20px",
                textAlign: "left",


              }}>Allergies</p>

              <Select
                defaultValue="lucy"
                style={{
                  width: 345,
                  height: 44,
                  borderRadius: "8px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Don’t have allergies',
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

            </div>

            <div style={{ display: 'flex', gap: "13px" }}>
              <div style={{ display: "flex", flexDirection: 'column', gap: "7px" }}>
                <label>Section</label>
                <div>
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 165,
                      height: 44,
                      borderRadius: "8px",
                    }}
                    onChange={handleChange}
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
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: 'column', gap: "7px" }}>
                <label>Menu</label>
                <div>
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 165,
                      height: 44,
                      borderRadius: "8px",
                    }}
                    onChange={handleChange}
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
                </div>
              </div>
            </div>
          </div>

          <div style={{
            display: "flex",
            gap: "12px",
            // height: "120px",
            alignItems: "flex-end"
          }}>
            <button className='sectionItem__resetBtn'>Reset</button>
            <button className='sectionItem__applyBtn'>Apply</button>
          </div>
        </div>
      </Drawer>

    </div>
  )
}

export default SectionItems



