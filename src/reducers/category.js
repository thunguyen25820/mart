import { constant } from "../constants";

const initState = {
    listCategory: {
        state: constant.LOADING
    },
};

export function category(state = initState, action){
    switch(action.type){
        case constant.GET_CATEGORY_SUCCESS:{
            return{
                ...state,
                listCategory: {
                    state: constant.SUCCESS,
                    data: action.data,
                },
            };
        }
        case constant.GET_CATEGORY_FAILURE:{
            return{
                ...state,
                listCategory:{
                    state: constant.FAILURE,
                    data: [],
                },
            };
        }
        default:
            return state;
    }
}