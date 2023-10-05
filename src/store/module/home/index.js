import { createSlice } from '@reduxjs/toolkit'




const HomeStore = createSlice({
    name: "HomeStore",
    initialState: {
        banner: []
    },
    reducers: {
        changeBanner: (state, { payload }) => {
            state.banner = payload
        }
    }
})


export default HomeStore.reducer