import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPrice, getHomeHighScore, getHomeDiscount } from '@/api/home'

export const fetchHomeGoodPrice = createAsyncThunk('fetchHomeGoodPrice', (requestParams = {}, store) => {
    getHomeGoodPrice().then(res => {
        store.dispatch(changeBanner(res))
    })
    getHomeHighScore().then(res => {
        store.dispatch(changeHighScore(res))
    })
    getHomeDiscount().then(res => {
        store.dispatch(changeDiscount(res))
    })

})

const HomeStore = createSlice({
    name: "HomeStore",
    initialState: {
        goodPrice: null,
        highScore: null,
        discount: null
    },
    reducers: {
        changeBanner: (state, { payload }) => {
            state.goodPrice = payload
        },
        changeHighScore: (state, { payload }) => {
            state.highScore = payload
        },
        changeDiscount: (state, { payload }) => {
            state.discount = payload
        }
    }
})

export const { changeBanner, changeHighScore, changeDiscount } = HomeStore.actions
export default HomeStore.reducer