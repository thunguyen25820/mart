import { constant } from "../constants";

const initStatus = {
    listCategory: {
        state: "LOADING"
    },
};

export function category(state = initStatus, action){
    switch(action.type){
        case constant.GET_CATEGORY_SUCCESS:{
            return{
                ...state,
                listCategory: {
                    state: "SUCCESS",
                    data: action.data,
                },
            };
        }
        case constant.GET_CATEGORY_FAILURE:{
            return{
                ...state,
                listCategory:{
                    state: "FAILURE",
                    data: [],
                },
            };
        }
        default:
            return state;
    }
}