import { constant } from "../constants";

function getCategory(){
    const requestObj = {
        method: "GET",
    };
    return fetch(constant.URL_API + "/category", requestObj)
            .then(res => res.json())
            .then(data =>{
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

export const categoryService = {
    getCategory,
}