import { constant } from "../constants"
function getProductInfo(){
    const requestObj = {
        method: "GET",
    }

    return fetch(constant.URL_API + "/product/61c04f703b122c8fa6bf2c9b", requestObj)
            .then(res => res.json())
            .then(data => {
                console.log("thong tin san pham: ",data);
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

function getProductSimilar(){
    const requestObj = {
        method: "GET",
    }
    return fetch(constant.URL_API + "/product/similar/61c04f703b122c8fa6bf2c9b", requestObj)
            .then(res => res.json())
            .then(data => {
                console.log("san pham tuong tu: ",data);
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

export const productService = {
    getProductInfo,
    getProductSimilar,
}