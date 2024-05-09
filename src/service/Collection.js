import { deleteApi, getApi, postApi, putApi } from "./ApiMethod";
import { loginApi } from "./Authapi";


const GETALL = "resturant/getAll";
const UPDATE_PROFILE = "resturant/update";
const PROFILE_UPDATE_TIME = "resturant/updateTime";

//menus
const GETALLMENU = "menu/getAll";
const CREATEMENU = "menu/create";
const MENU_UPDATE = "menu/update";
const MENU_UPDATE_STATUS = "menu/updateStatus";

//sections
const GET_ALL_SECTION = "section/get";
const CREATE_SECTION = "section/create";
const SECTION_SELECT_MENU = "section/getAll";
const SECTION_UPDATE_STATUS = "section/updateStatus";
const SECTION_UPDATE = "section/update";


//login
export const loginAPIResponse = async (data) => {
  return await loginApi(data);
}


///////////////////////////// Profile ///////////////////////////////////////

//getProfile Details
export const getProfileDetailsAPI = async () => {
  return await getApi(GETALL);
};

//update profile details
export const updateProfile = async (data) => {
  return await putApi(UPDATE_PROFILE, data)
}

export const updateTime = async (data) => {
  return await putApi(PROFILE_UPDATE_TIME, data)
}

///////////////////////////////////// Menus //////////////////////////////////////
//getAll menus
export const getAllMenuAPI = async () => {
  return await getApi(GETALLMENU);
}

//createMenu
export const createMenuAPI = async (data) => {
  return await postApi(CREATEMENU, data);
}

// update menu status
export const updateMenuStatusAPI = async (data) => {
  return await putApi(MENU_UPDATE_STATUS, data);
}

//update menu 
export const updateMenuAPI = async (data) => {
  return await putApi(MENU_UPDATE, data);
}

//delete menu
export const deleteMenuAPI = async (id) => {
  const url = `menu/delete/${id}`;
  return await deleteApi(url);
}


////////////////////////////////// sections ////////////////////////////////////////////
//section listing

export const sectionListingAPI = async () => {
  return await getApi(GET_ALL_SECTION);
}

export const createSectionAPI = async (data) => {
  return await postApi(CREATE_SECTION, data);
}

export const sectionMenuDropwonAPI = async () => {
  return await getApi(SECTION_SELECT_MENU);
}

export const sectionDeleteAPI = async (id) => {
  const url = `section/delete/${id}`;
  return await deleteApi(url);
}

export const sectionUpdateStatusAPI = async (data) => {
  return await putApi(SECTION_UPDATE_STATUS, data);
}

export const sectionUpdateAPI = async (data) => {
  return await putApi(SECTION_UPDATE, data);
}