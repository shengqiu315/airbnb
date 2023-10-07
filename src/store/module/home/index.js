import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPrice } from '@/api/home'

export const fetchHomeGoodPrice = createAsyncThunk('fetchHomeGoodPrice', async (requestParams = {}, store) => {
    const res = await getHomeGoodPrice({ ...requestParams })
    store.dispatch(changeBanner(res))
})

const HomeStore = createSlice({
    name: "HomeStore",
    initialState: {
        goodPrice: []
    },
    reducers: {
        changeBanner: (state, { payload }) => {
            state.goodPrice = payload
        }
    }
})

export const { changeBanner } = HomeStore.actions
export default HomeStore.reducer