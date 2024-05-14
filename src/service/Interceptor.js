import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const base = "http://192.168.1.194:8080/"
const version = "api/v1/"
const EndPoint = base + version

const Api = axios.create({
  timeout: 1000000,
  baseURL: EndPoint,
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
Api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    };
    return config;
  },
  (error) =>
    // Do something with request error  
    Promise.reject(error)
);

// Add a response interceptor
Api.interceptors.response.use(
  (response) => {
    if (response.data.status === 401) {
      // Logout
    } else {
      return response;
    }
  },
  (error) => {
    // let errorMessage = '';

    // if (error.response && error.response.data && error.response.data.msg) {
    //   errorMessage = error.response.data.msg;
    // } else if (error.message) {
    //   errorMessage = error.message;
    // } else {
    //   errorMessage = "An error occurred. Please try again later.";
    // }

    // toast.error(errorMessage, {
    //   theme: "colored",
    // });
    // console.log(errorMessage, "error")

    return Promise.reject(error);

  }
);
export default Api;
