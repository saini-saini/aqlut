import axios from 'axios';


//login
 const loginApi =  (email, password) => {
    return axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': '*'
        }
    });
};


export {loginApi}