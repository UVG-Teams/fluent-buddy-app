import { fork, all } from 'redux-saga/effects'

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
} from './auth'

import {
    watchFetchChatroomsStarted,
} from './chatrooms'


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchFetchChatroomsStarted),
    ])
}


export default mainSaga
