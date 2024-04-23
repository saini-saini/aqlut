import * as Yup from 'yup'


export const WelcomeValidation = Yup.object({
    location: Yup.string().required("Location is required"),
})


export const LoginValidation = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
})
