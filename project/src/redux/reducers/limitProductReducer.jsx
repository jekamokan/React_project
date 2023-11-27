export const GET_LIMIT_PRODUCTS = 'GET_LIMIT_PRODUCTS'
export const SET_LIMIT_PRODUCTS = 'SET_LIMIT_PRODUCTS'


const defaultState = {
    data: '',
}


export default function limitProductReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LIMIT_PRODUCTS:
            return {
                ...state,
                data: action.payload.data
            }
       
        default:
            return state
    }
}



export const getLimitProductsAC = (limit = 20, skip = 0) => ({
    type: GET_LIMIT_PRODUCTS,
    payload: {
        skip,
        limit
    }
})

export const setLimitProductsAC = ({ data }) => ({
    type: SET_LIMIT_PRODUCTS,
    payload: {
        data
    }
})



