import React from 'react'
import "./dineIn.scss"
import AddIcon from '@mui/icons-material/Add';
import occupiedOrder from "../../../images/occupiedOrder.png"
import availableOrder from "../../../images/availableOrder.png"
import { useNavigate } from 'react-router-dom';
const DineIn = () => {
    const navigate = useNavigate();

    return (
        <div className='order'>
            <div className='order__topWrapper'>
                <span className='order__title'>Orders</span>
                <button className='order__createButton'><AddIcon style={{
                    width: "17px", height: "17px", marginRight: "5px"
                }} />Add Order</button>
            </div>

            <div className='order__center'>
                <div className='order__btnWrapper'>
                    <button className='order__dineInBtn' onClick={() => navigate("/home/orders/dine-in")}>DINE IN</button>
                    <button className='order__otherBtn' onClick={() => navigate("/home/orders/take-way")}>TAKEAWAY</button>
                    <button className='order__otherBtn' onClick={() => navigate("/home/orders/completed")}>COMPLETED</button>
                </div>
            </div>

            <div className='order__bottomWrapper'>
                <div className='order__cardWrapper'>
                    <div className='order__card' style={{ border: "1px solid #FF0606" }}>
                        <div className='order__cardImg'>
                            <img src={occupiedOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#FF0606" }}>Occupied</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>

                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>

                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>
                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>
                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>
                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>
                    <div className='order__card'>
                        <div className='order__cardImg'>
                            <img src={availableOrder} alt="" />
                        </div>
                        <div className='order__cardTitleWrapper'>
                            <p className='order__cardTitle'>Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#00B112" }}>Available</span> </p>
                            <p className='order__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                            <p className='order__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Inside Tables</span> </p>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DineIn
