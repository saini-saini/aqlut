import { getApi, postApi, putApi } from "./ApiMethod";
import { loginApi } from "./Authapi";


const GETALL = "resturant/getAll";

//menus
const GETALLMENU = "menu/getAll";
const CREATEMENU = "menu/create";
const UPDATEMENUSTATUS ="menu/updateStatus/:id";

//login
export const loginAPIResponse = async (data) => {
  return await loginApi(data);
}

//getProfile Details
export const getProfileDetailsAPI = async () => {
  return await getApi(GETALL);
};


//getAll menus
export const getAllMenuAPI = async () => {
  return await getApi(GETALLMENU);
}

//creareMenu
export const createMenuAPI = async (data) => {
  return await postApi(CREATEMENU, data);
}


// export const updateMenuStatusAPI = async (data) => {
//   return await putApi(UPDATEMENUSTATUS, data);
// }

// API method
export const updateMenuStatusAPI = async (id, data) => {
  const url = `menu/updateStatus/${id}`;
  return await putApi(url, data);
}
