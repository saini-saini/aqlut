import { createSlice } from '@reduxjs/toolkit'

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { loginUser } = LoginSlice.actions
export default LoginSlice.reducer