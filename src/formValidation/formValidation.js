import * as Yup from 'yup'

//auth validation
export const WelcomeValidation = Yup.object({
    location: Yup.string().required("Location is required"),
})

export const LoginValidation = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").max(16, "Must be 16 characters or less").min(8, "Must be 8 characters or more"),
})

export const ForgetPasswordValidation = Yup.object({
    email: Yup.string().email().required("Email is required"),
})

//profile validation

export const ChangePasswordValidation = Yup.object({
    currentPassword: Yup.string().required("Current password is required").max(16, "Must be 16 characters or less").min(8, "Must be 8 characters or more"),
    newPassword: Yup.string().required("New password is required").max(16, "Must be 16 characters or less").min(8, "Must be 8 characters or more"),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('newPassword'), null], 'Passwords must match').max(16, "Must be 16 characters or less").min(8, "Must be 8 characters or more"),
})

export const ProfileValidation = Yup.object({
    image : Yup.string(),
    restaurantName: Yup.string().required("Restaurant Name is required"),
    mailAddress: Yup.string().email().required("Mail Address is required"),
    address: Yup.string().required("Address is required"),
    timeZone: Yup.string().required("Time zone is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    restaurantBio: Yup.string().required("Restaurant bio is required"),
    currency: Yup.string().required("Currency is required"),
    vat: Yup.string().required("Vat is required"),
    serviceCharge: Yup.string().required("Service charge is required"),
    time: Yup.string(),
})


//Menus > create menu validation
export const CreateMenuValidation = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().required("Image is required"),
})