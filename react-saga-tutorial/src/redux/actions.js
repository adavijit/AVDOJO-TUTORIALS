import {types} from './types'

export function fetchData(data){
    return{
        type: types.SEND_REQUEST,
        payload:data
    }
}


export const fetchDataSuccess = (user)=>{
    return{
        type : types.SEND_REQUEST_SUCESS,
        payload: user
    }
}


export const fetchDataFailure = (error)=>{
    return{
        type: types.SEND_REQUEST_FAILURE,
        payload:{},
        error: error
    }
}