import { constant } from "../constants";
import { categoryService} from "../services/categoryService";

function getCategory(){
    return (dispatch) => {
        categoryService.getCategory().then(res => {
            if(res.status === constant.SUCCESS){
                dispatch(success(res.data));
            }else{
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data){
        return{ type: constant.GET_CATEGORY_SUCCESS, data};
    }
    function failure(msg){
        return{ type: constant.GET_CATEGORY_FAILURE, msg};
    }
}

export const categoryAction = {
    getCategory,
}