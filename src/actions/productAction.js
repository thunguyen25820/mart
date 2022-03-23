import { constant } from "../constants"
import { productService } from "../services/productService"

function getProduct(){
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