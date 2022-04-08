import { constant } from "../constants"
function getProductInfo(productid){
    const requestObj = {
        method: "GET",
    }

    return fetch(constant.URL_API + "/product/" + productid, requestObj)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

function getProductSimilar(productid){
    const requestObj = {
        method: "GET",
    }
    return fetch(constant.URL_API + "/product/similar/" + productid, requestObj)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

function getProducts(page){
    const requestObj = {
        method: "GET",
    }
    return fetch(constant.URL_API + "/product?page=" +page, requestObj)
            .then(res => res.json())
            .then(data => {
                console.log("muc sp: ", data)
                return data;
            })
            .catch(error => {
                return [];
            })
}

export const productService = {
    getProductInfo,
    getProductSimilar,
    getProducts,
}