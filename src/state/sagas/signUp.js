import {
    call,
    takeEvery,
    put,
    delay,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from 'src/settings';

import * as selectors from 'state/reducers'
import * as actions from 'state/actions/signUp'
import * as authActions from 'state/actions/auth'
import * as types from 'state/types/signUp'
import * as http from 'state/utils/http'

function* signUp (action) {
    try{
        const response = yield call(
            fetch,
            `${API_BASE_URL}/users/create_user/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers:{
                    'Content-type': 'application/json'
                },
            },
        );
        if(http.isSuccessful(response.status)){
            const username = action.payload.username;
            const password = action.payload.password;
            yield put(actions.completeSignUp());
            yield put(authActions.startLogin(username, password));
        } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failSignUp(non_field_errors[0]));
        }
    }catch(error){
        yield put(actions.failSignUp('Connection failed!'));
    }
};

export function* watchSignUpStarted(){
    yield takeEvery(
        types.SIGN_UP_STARTED,
        signUp,
    )
}