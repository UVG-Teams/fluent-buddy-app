import {
    call,
    takeEvery,
    select,
    put,
} from 'redux-saga/effects'

import * as types from 'state/types/tema'
import * as selectors from 'state/reducers'
import * as actions from 'state/actions/tema'
import * as http from 'state/utils/http'

import {
    API_BASE_URL,
} from 'src/settings'

function* getTheme(action){
    try{
        const response = yield call(
            fetch,
            `${API_BASE_URL}/tema/get_tema/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        if (http.isSuccessful(response.status)){
            const jsonResult = yield response.json();
            yield put(actions.completeGetTheme(jsonResult.theme))
        } else {
            const { non_field_errors } = yield response.json()
            yield put(actions.failGetTheme(non_field_errors[0]))
        }
    } catch(error) {
        yield put(actions.failGetTheme('Connection error!'))
    }
}

export function* watchGetTheme(){
    yield takeEvery(
        types.THEME_GET_STARTED,
        getTheme
    )
}

function* setTheme(action){
    const user = yield select(selectors.getAuthUserID)
    try{
        const response = yield call(
            fetch,
            `${API_BASE_URL}/tema/set_tema/`,
            {
                method: 'PATCH',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        if (http.isSuccessful(response.status)){
            const jsonResult = yield response.json();
            yield put(actions.completeSetTheme(jsonResult))
            console.log(actions.startGetTheme(user))
            yield put(actions.startGetTheme(user))
        } else {
            const { non_field_errors } = yield response.json()
            yield put(actions.failSetTheme(non_field_errors[0]))
        }
    } catch(error) {
        yield put(actions.failSetTheme('Connection error!'))
    }
}

export function* watchSetTheme(){
    yield takeEvery(
        types.THEME_SET_STARTED,
        setTheme
    )
}