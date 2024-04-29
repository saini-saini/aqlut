import './app.scss';
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/layout/layout";
import Menus from "./components/Menu/menus/menus";
import Profile from "./components/profile/profile";
import DineIn from "./components/orders/DineIn/dineIn";
import Section from "./components/Menu/sections/section";
import WelcomePage from "./components/login/welcomePage";
import TakeWay from "./components/orders/TakeWay/takeWay";
import QRCodes from "./components/QR_Menus/QR_Code/QR_Codes";
import Completed from "./components/orders/Completed/completed";
import CreateItem from "./components/Menu/sectionItem/createItem";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import SectionItems from "./components/Menu/sectionItem/sectionItems";
import QRMenuGroup from "./components/QR_Menus/QR_Menu_Groups/qr_menu_group";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
