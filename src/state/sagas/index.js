import { fork, all } from 'redux-saga/effects'

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
} from './auth'

import {
    watchCreateChatroomStarted,
} from './chatrooms'


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchCreateChatroomStarted),
    ])
}


export default mainSaga
