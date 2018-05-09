import * as Types from '@app/actions/types/app'

const initialState = {
    hasNavbar: true,
    hasFooter: true,
    contentLoading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case Types.HAS_NAVBAR:
            return {
                ...state,
                hasNavbar: action.payload
            }
        default:
            return state
    }
}

export default reducer