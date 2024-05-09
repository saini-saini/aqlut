import { createSlice } from '@reduxjs/toolkit'

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },

        logOutUser: (state) => {
            state.user = null
        }
    }
})

export const { loginUser, logOutUser } = LoginSlice.actions
export default LoginSlice.reducer