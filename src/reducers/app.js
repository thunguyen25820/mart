import { constant } from "../constants"

const initState = {
    listHomeInfo: {
        state: constant.LOADING,
    }
};

export function app(state = initState, action){
    switch(action.type){
        case constant.GET_HOMEINFO_SUCCESS: {
            return{
                ...state,
                listHomeInfo: {
                    state: constant.SUCCESS,
                    data: action.data,
                }
            }
        }
        case constant.GET_HOMEINFO_FAILURE: {
            return{
                ...state,
                listHomeInfo: {
                    state: constant.FAILURE,
                    data: [],
                }
            }
        }
        default: {
            return state;
        }
        
    }
}