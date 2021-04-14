import {
    call,
    takeEvery,
    put,
    // race,
    // delay,
    select,
} from 'redux-saga/effects'

import * as selectors from 'state/reducers'
import * as actions from 'state/actions/auth'
import * as types from 'state/types/auth'
import * as http from 'state/utils/http'

import {
    API_BASE_URL,
    validTimePercentage,
} from 'src/settings'


function* login(action) {
    try {

        url_endpoint = '/token-auth/'

        if (action.payload.type == 'third-party') {
            url_endpoint = '/users/token-auth-third-party/'
        }

        const response = yield call(
            fetch,
            `${API_BASE_URL}${url_endpoint}`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        if (http.isSuccessful(response.status)) {
            const { token } = yield response.json()
            yield put(actions.completeLogin(token))
        } else {
            const { non_field_errors } = yield response.json()
            yield put(actions.failLogin(non_field_errors[0]))
        }
    } catch (error) {
        yield put(actions.failLogin('Connection failed!'))
    }
}

export function* watchLoginStarted() {
    yield takeEvery(
        types.AUTHENTICATION_STARTED,
        login,
    )
}

function* refreshToken(action) {
    const expiration = yield select(selectors.getAuthExpiration)
    const now =  parseInt(new Date().getTime() / 1000)
    const usedTimePercentage = now/expiration

    if (usedTimePercentage > validTimePercentage) {
        try {
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/token-refresh/`,
                {
                    method: 'POST',
                    body: JSON.stringify({ token }),
                    headers:{
                        'Content-Type': 'application/json',
                    },
                },
            )

            if (http.isSuccessful(response.status)) {
                const jsonResult = yield response.json()
                yield put(actions.completeTokenRefresh(jsonResult.token))
            } else {
                // TODO: poner un redirect al home (login)
                const { non_field_errors } = yield response.json()
                yield put(actions.failTokenRefresh(non_field_errors[0]))
            }
        } catch (error) {
            // TODO: poner un redirect al home (login)
            yield put(actions.failTokenRefresh('Connection failed!'))
        }
    }
}

export function* watchRefreshTokenStarted() {
    yield takeEvery(
        types.TOKEN_REFRESH_STARTED,
        refreshToken,
    )
}

function* signUp(action) {
    try {
        const response = yield call(
            fetch,
            `${API_BASE_URL}/users/create_user/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-type': 'application/json'
                },
            },
        )

        if (http.isSuccessful(response.status)) {
            yield put(actions.completeSignUp())
            const { token } = yield response.json()
            yield put(actions.completeLogin(token))
        } else {
            const { non_field_errors } = yield response.json()
            yield put(actions.failSignUp(non_field_errors[0]))
        }
    } catch(error) {
        yield put(actions.failSignUp('Connection failed!'))
    }
}

export function* watchSignUpStarted() {
    yield takeEvery(
        types.SIGN_UP_STARTED,
        signUp,
    )
}
