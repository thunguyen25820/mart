import { constant } from "../constants"
function getHomeInfo(){
    const requestObj = {
        method: "GET",
    };

    return fetch(constant.URL_API + "/home", requestObj)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
                return {};
            })
}

export const appService = {
    getHomeInfo,
}