import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPrice, getHomeHighScore, getHomeDiscount, getHomeLongFor,getHomeHotrecommenddest,getHomePlus } from '@/api/home'

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
    getHomeLongFor().then(res => {
        store.dispatch(changeLongFor(res))
    })

    getHomeHotrecommenddest().then(res => {
        store.dispatch(changeHotrecommenddest(res))
    })
    getHomePlus().then(res => {
        store.dispatch(changePlusInfo(res))
    })

})

const HomeStore = createSlice({
    name: "HomeStore",
    initialState: {
        goodPrice: null,
        highScore: null,
        discount: null,
        longFor: null,
        hotrecommenddest:null,
        plusInfo:null
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
        },
        changeLongFor: (state, { payload }) => {
            state.longFor = payload
        },
        changeHotrecommenddest: (state, { payload }) => {
            state.hotrecommenddest = payload
        },
        changePlusInfo: (state, { payload }) => {
            state.plusInfo = payload
        },
    }
})

export const { changeBanner, changeHighScore, changeDiscount, changeLongFor,changeHotrecommenddest ,changePlusInfo} = HomeStore.actions
export default HomeStore.reducer