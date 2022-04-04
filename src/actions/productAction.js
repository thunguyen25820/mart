import { constant } from "../constants"
import { productService } from "../services/productService"

function getProductInfo(){
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

function getProductSimilar(){
    console.log("getProductSimilar->action");
    return dispatch => {
        productService.getProductSimilar().then(res => {
            if(res.status === constant.SUCCESS){
                dispatch(success(res.data));
            }else{
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data){
        console.log("success_similarproduct");
        return{
            type: constant.GET_PRODUCT_SIMILAR_SUCCESS, data
        }
    }
    function failure(msg){
        return{
            type: constant.GET_PRODUCT_SIMILAR_FAILURE, msg
        }
    }
}

export const productAction = {
    getProductInfo,
    getProductSimilar,
}