import { constant } from "../constants"
import { productService } from "../services/productService"

function getProduct(){
    console.log("hhhhhhhhhhhh");
    return dispatch => {
        productService.getProduct().then(res => {
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
            type: constant.GET_PRODUCTS_SUCCESS, data
        }
    }
    function failure(msg){
        return{
            type: constant.GET_PRODUCTS_FAILURE, msg
        }
    }
}

export const productAction = {
    getProduct,
}