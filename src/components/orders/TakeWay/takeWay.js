import React from 'react'
import "./takeWay.scss"
import AddIcon from '@mui/icons-material/Add';
import occupiedOrder from "../../../images/occupiedOrder.png"
import takeWay from "../../../images/takeWay.png"
import { useNavigate } from 'react-router-dom';


const TakeWay = () => {

    const navigate = useNavigate();

  return (
    <div className='takeWay'>
    <div className='takeWay__topWrapper'>
        <span className='takeWay__title'>Orders</span>
        <button className='takeWay__createButton'><AddIcon style={{
            width: "17px", height: "17px", marginRight: "5px"
        }} />Add Order</button>
    </div>

    <div className='takeWay__center'>
        <div className='takeWay__btnWrapper'>
            <button className='takeWay__otherBtn' onClick={() => navigate("/home/orders/dine-in")}>DINE IN</button>
            <button className='takeWay__takeWayBtn' onClick={() => navigate("/home/orders/take-way")}>TAKEAWAY</button>
            <button className='takeWay__otherBtn' onClick={() => navigate("/home/orders/completed")}>COMPLETED</button>
        </div>
    </div>

    <div className='takeWay__bottomWrapper'>
        <div className='takeWay__cardWrapper'>
            <div className='takeWay__card'>
                <div className='takeWay__cardImg'>
                    <img src={takeWay} alt="" />
                </div>
                <div className='takeWay__cardTitleWrapper'>
                    <p className='takeWay__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                    <p className='takeWay__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Pool Tables</span> </p>
                    <p className='takeWay__cardTitle'>Order Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Collect Payment</span> </p>

                </div>
            </div>

            <div className='takeWay__card' style={{ border: "1px solid #FF0606" }}>
                <div className='takeWay__cardImg'>
                    <img src={occupiedOrder} alt="" />
                </div>
                <div className='takeWay__cardTitleWrapper'>
                    <p className='takeWay__cardTitle'>QR Code Name<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Table 02</span> </p>
                    <p className='takeWay__cardTitle'>QR Code Group<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Pool Tables</span> </p>
                    <p className='takeWay__cardTitle'>Order Status<span style={{ marginLeft: "4px" }}>:</span> <span style={{ color: "#9D9D9D" }}>Collect Payment</span> </p>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TakeWay
