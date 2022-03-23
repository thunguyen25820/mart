import { constant } from "../constants"
const initState = {
    listProduct: {
        state: constant.LOADING,
    },
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
        default:
            return state;
    }
}