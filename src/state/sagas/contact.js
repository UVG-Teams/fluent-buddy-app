import {
    call,
    takeEvery,
    put,
    race,
    delay,
    select,
} from 'redux-saga/effects'

import * as actions from 'state/actions/contact'
import * as http from 'state/utils/http'

import {
    API_BASE_URL,
} from 'src/settings'

function* contact(action) {
    try{
        console.log(action.payload)
        const response = yield call(
            fetch,
            `${API_BASE_URL}/contact/save_message/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers:{
                    'Content-type': 'application/json'
                },
            },
        )

        if (http.isSuccessful(response.status)) {
            console.log('Se guardo mensaje')
        } else {
            const { non_field_errors } = yield response.json()
            yield put(actions.failedContactMessage(non_field_errors[0]))
        }
    } catch(error) {
        yield put(actions.failedContactMessage('Connection failed!'))
    }
}

export function* watchContactMessageStarted() {
    yield takeEvery(
        'SAVING_CONTACT_MESSAGE',
        contact,
    )
}