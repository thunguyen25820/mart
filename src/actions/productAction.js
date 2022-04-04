import { constant } from "../constants"
import { productService } from "../services/productService"

function getProductInfo(){
    console.log("hhhhhhhhhhhh");
    return dispatch => {
        productService.getProductInfo().then(res => {
            if(res.status === constant.SUCCESS){
                dispatch(success(res.data));
            }else{
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data){
        console.log("success");
        return{
            type: constant.GET_PRODUCT_SUCCESS, data
        }
    }
    function failure(msg){
        return{
            type: constant.GET_PRODUCT_FAILURE, msg
        }
    }
}

export const productAction = {
    getProductInfo,
}