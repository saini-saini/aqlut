import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import './loader.css'

// const Loader = () => {
//     return (
//         <div className="loading-spinner" style={{ height: "calc(100vh - 82px)", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <ColorRing
//                 visible={true}
//                 height="80"
//                 width="80"
//                 ariaLabel="color-ring-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="color-ring-wrapper"
//                 colors={['#F55A2C', '#F55A2C', '#F55A2C', '#F55A2C', '#F55A2C']}
//             />
//         </div>
//     )
// }

// export default Loader

const Loader = () => {
    return (
        <div className="loading-spinner" style={{ height: "calc(100vh - 82px)", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div class="loader">
            <div class="wrapper">
                <div class="text">LOADING</div>
                <div class="box"></div>
            </div>
        </div>

        </div>

    )
}

export default Loader

