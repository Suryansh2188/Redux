import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [
        // {
        //     id : 1,
        //     title : "Redmi Note 9 Pro",
        //     price : 15000,
        //     description : "Redmi Note 9 Pro is a smartphone that comes with a 6000mah battery",
        //     category : "Mobiles",
        //     image : "https://m.media-amazon.com/images/I/71jZJX3",
        // }
    ],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
             return {...state, products: payload};
            default:
                return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
            default:
                return state;
    }
}