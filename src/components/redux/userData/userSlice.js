import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("AddUser: ", action.payload)
            state.user = action.payload
        }
    }
})

export const { addUser } = userReducer.actions
export default userReducer.reducer