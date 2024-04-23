import Login from "./components/login/login";
import './app.scss';
import WelcomePage from "./components/login/welcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Layout from "./components/layout/layout";
import Menus from "./components/Menu/menus/menus";
import Profile from "./components/profile/profile";
import Section from "./components/Menu/sections/section";
import SectionItems from "./components/Menu/sectionItem/sectionItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateItem from "./components/Menu/sectionItem/createItem";
import QRCodes from "./components/QR_Menus/QR_Code/QR_Codes";
import QRMenuGroup from "./components/QR_Menus/QR_Menu_Groups/qr_menu_group";
import Order from "./components/orders/DineIn/dineIn";
import DineIn from "./components/orders/DineIn/dineIn";
import TakeWay from "./components/orders/TakeWay/takeWay";
import Completed from "./components/orders/Completed/completed";

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="menus/menus" element={<Menus />} />
            <Route path="menus/sections" element={<Section />} />
            <Route path="menus/section_items" element={<SectionItems />}>
            </Route>
            <Route path="menus/create_item" element={<CreateItem />} />
            <Route path="qr-menus/qr-codes" element={<QRCodes/>}/>
            <Route path="qr-menus/qr-menu-groups" element={<QRMenuGroup />} />
            <Route path="orders/dine-in" element={<DineIn />} />
            <Route path="orders/take-way" element={<TakeWay />} />
            <Route path="orders/completed" element={<Completed />} />
          </Route>

          {/* <Route path="/home" element={<Layout />} />
          <Route path="/home/menus" element={<Menus />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
