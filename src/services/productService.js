import { constant } from "../constants"
function getProduct(){
    const requestObj = {
        method: "GET",
    }

    return fetch(constant.URL_API + "/product", requestObj)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

export const productService = {
    getProduct,
}