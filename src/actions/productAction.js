import { constant } from "../constants"
import { productService } from "../services/productService"

function getProductInfo(productid) {
    return dispatch => {
        productService.getProductInfo(productid).then(res => {
            if (res.status === constant.SUCCESS) {
                dispatch(success(res.data));
            } else {
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data) {
        console.log("success");
        return {
            type: constant.GET_PRODUCT_SUCCESS, data
        }
    }
    function failure(msg) {
        return {
            type: constant.GET_PRODUCT_FAILURE, msg
        }
    }
}

function getProductSimilar(productid) {
    console.log("getProductSimilar->action");
    return dispatch => {
        productService.getProductSimilar(productid).then(res => {
            if (res.status === constant.SUCCESS) {
                dispatch(success(res.data));
            } else {
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data) {
        console.log("success_similarproduct");
        return {
            type: constant.GET_PRODUCT_SIMILAR_SUCCESS, data
        }
    }
    function failure(msg) {
        return {
            type: constant.GET_PRODUCT_SIMILAR_FAILURE, msg
        }
    }
}

function getProducts(page) {
    console.log("action: lay sp");
    return dispatch => {
        productService.getProducts(page).then(res => {
            if (res.status === constant.SUCCESS) {
                dispatch(success(res.data, res.total_page));
            } else {
                dispatch(failure(res.msg));
            }
        })
    }
    function success(data, total_page) {
        return {
            type: constant.GET_PRODUCTS_SUCCESS, data, total_page
        }
    }
    function failure(msg) {
        return {
            type: constant.GET_PRODUCTS_FAILURE, msg
        }
    }
}

export const productAction = {
    getProductInfo,
    getProductSimilar,
    getProducts,
}