import * as actionTypes from './constants'
import { getEntireListApi } from "@/api/home"

export const changeInfo = (info) => ({ type: actionTypes.CHANGE_INFO, info })
export const changeTotal = (total) => ({ type: actionTypes.CHANGE_TOTAL, total })
export const changeMoreList = (moreList) => ({ type: actionTypes.CHANGE_MORE_LIST, moreList })
export const changeOffset = (offset) => ({ type: actionTypes.CHANGE_OFFSET, offset })
export const changeLoadingState = (isLoading) => ({ type: actionTypes.CHANGE_LOADING, isLoading })


export const fetchMoreListData = () => {
    return async (dispatch, getState) => {
        dispatch(changeLoadingState(true))
        window.scrollTo(0, 0)
        const res = await getEntireListApi(getState().moreStore.offset * getState().moreStore.size, getState().moreStore.size)
        dispatch(changeMoreList(res.list))
        dispatch(changeTotal(res.totalCount))
        dispatch(changeLoadingState(false))
    }
}