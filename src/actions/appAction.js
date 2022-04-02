import { constant } from "../constants"
import { appService } from "../services/appService"
function getHomeInfo(){
    return (dispatch) => {
        appService.getHomeInfo().then(res =>{
            if(res.status === constant.SUCCESS){
                dispatch(success(res.data));
            }else{
                dispatch(failure(res.msg));
            }
        })
    }

    function success(data){
        return {type: constant.GET_HOMEINFO_SUCCESS, data}
    }

    function failure(msg){
        return {type: constant.GET_HOMEINFO_FAILURE, msg}
    }
}

export const appAction = {
    getHomeInfo,
}