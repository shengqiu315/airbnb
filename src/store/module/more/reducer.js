import * as actionTypes from './constants'

const DEFAULT_MORE_STORE = {
    info: {}
}


const MoreStoreReducer = (state = DEFAULT_MORE_STORE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INFO:
            return { ...state, info: action.info }
        default:
            return { ...state }
    }

}

export { MoreStoreReducer }