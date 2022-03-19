import { constant } from "../constants";
import { categoryService} from "../services/categoryService";

function getCategory(){
    return (dispatch) => {
        categoryService.getCategory().then(res => {
            if(res.status === constant.GET_CATEGORY_SUCCESS){
                dispatch(success(res.data));
            }else{
                dispatch(failure(res.code, res.msg));
            }
        });
    };
    function success(data){
        return{ type: "GET_CATEGORY_SUCCESS", data};
    }
    function failure(code, msg){
        return{ type: "GET_CATEGORY_FAILURE", code, msg};
    }
}

export const categoryAction = {
    getCategory,
}