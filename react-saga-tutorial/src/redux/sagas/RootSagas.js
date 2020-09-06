import {take , call , all} from 'redux-saga/effects'

import {watchFetchDataSaga} from './fetchDataSaga'

export default function* RootSaga(){
    yield all([
        watchFetchDataSaga()
    ])
}

