import * as actionTypes from './constants'

const DEFAULT_MORE_STORE = {
    info: {},
    offset: 0,
    total: 0,
    moreList: [], size: 20
}


const MoreStoreReducer = (state = DEFAULT_MORE_STORE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INFO:
            return { ...state, info: action.info }
        case actionTypes.CHANGE_MORE_LIST:
            return { ...state, moreList: action.moreList }
        case actionTypes.CHANGE_OFFSET:
            return { ...state, offset: action.offset }
        case actionTypes.CHANGE_TOTAL:
            return { ...state, total: action.total }
        default:
            return { ...state }
    }

}

export { MoreStoreReducer }