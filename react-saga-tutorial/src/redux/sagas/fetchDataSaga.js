import {takeEvery ,call ,put} from 'redux-saga/effects'
import {types} from '../types'
import {fetchDataSuccess } from '../actions'

import axios from 'axios'

function* ayscFetchRequest(action){
    try{
        const url = `https://reqres.in/api/users/${action.payload}` 
        const response = yield call(()=>axios.get(url))
        console.log(response);
        yield put(fetchDataSuccess(response.data.data.first_name))
    }
    catch(error){
        console.log(error);
    }
}

export function* watchFetchDataSaga(){

    yield takeEvery( types.SEND_REQUEST , ayscFetchRequest)
}