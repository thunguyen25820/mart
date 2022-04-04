import { constant } from "../constants"
const initState = {
    listProduct: {
        state: constant.LOADING,
    },
    productInfo: {
        state: constant.LOADING
    },
    productSimilar: {
        state: constant.LOADING
    }
}
export function product(state = initState, action){
    switch(action.type){
        case constant.GET_PRODUCTS_SUCCESS:{
            return{
                ...state,
                listProduct: {
                    state: constant.SUCCESS,
                    data: action.data,
                }
            }
        }
        case constant.GET_PRODUCTS_FAILURE:{
            return{
                ...state,
                listProduct: {
                    state: constant.FAILURE,
                    data: [],
                }
            }
        }
        case constant.GET_PRODUCT_SUCCESS:{
            return{
                ...state,
                productInfo: {
                    state: constant.SUCCESS,
                    data: action.data,
                }
            }
        }
        case constant.GET_PRODUCT_FAILURE:{
            return{
                ...state,
                productInfo: {
                    state: constant.FAILURE,
                    data: {},
                }
            }
        }
        case constant.GET_PRODUCT_SIMILAR_SUCCESS:{
            return{
                ...state,
                productSimilar: {
                    state: constant.SUCCESS,
                    data: action.data,
                }
            }
        }
        case constant.GET_PRODUCT_SIMILAR_FAILURE:{
            return{
                ...state,
                productSimilar: {
                    state: constant.FAILURE,
                    data: [],
                }
            }
        }
        default:
            return state;
    }
}