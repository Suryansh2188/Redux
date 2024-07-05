import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS, // ActionTypes is a instance
        payload: products // Data we are getting
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT, // ActionTypes is a instance
        payload: product // Data we are getting
    }
}
export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT, // ActionTypes is a instance
    }
}