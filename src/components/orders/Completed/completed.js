import React, { useState } from 'react'
import "./completed.scss"
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import filterIcon from "../../../images/filter.png"
import searchIcon from "../../../images/search (3).png"
import { message, Upload } from 'antd';
import exportIcon from "../../../images/export.png"


const Completed = () => {

  const navigate = useNavigate();

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

  return (
    <div className='complete'>
    <div className='complete__topWrapper'>
        <span className='complete__title'>Orders Module</span>
    </div>

    <div className='complete__center'>
        <div className='complete__btnWrapper'>
            <button className='complete__otherBtn' onClick={() => navigate("/home/orders/dine-in")}>DINE IN</button>
            <button className='complete__otherBtn' onClick={() => navigate("/home/orders/take-way")}>TAKEAWAY</button>
            <button className='complete__compBtn' onClick={() => navigate("/home/orders/completed")}>COMPLETED</button>
            </div>

        <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "13px" }}>
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



    </div>

    <div className='complete__bottomWrapper'>
       
    </div>
</div>
  )
}

export default Completed
