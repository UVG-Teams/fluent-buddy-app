import { fork, all } from 'redux-saga/effects'

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
} from './auth'
import { watchContactMessageStarted } from './contact'
import {
    watchGetTheme,
    watchSetTheme,
} from './tema'


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchContactMessageStarted),
        fork(watchGetTheme),
        fork(watchSetTheme),
    ])
}


export default mainSaga
