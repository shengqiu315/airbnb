import { configureStore } from '@reduxjs/toolkit'

import HomeStoreReducer from './module/home/index'
import { MoreStoreReducer } from './module/more/index'
const store = configureStore({
    reducer: {
        homeStore: HomeStoreReducer,
        moreStore: MoreStoreReducer
    }
})


export default store

export * from './module/home/index'
export * from './module/more/index'