import {
    call,
    takeEvery,
    put,
    race,
    delay,
    select,
} from 'redux-saga/effects'

import * as selectors from 'state/reducers'
import * as actions from 'state/actions/chatrooms'
import * as types from 'state/types/chatrooms'
import * as http from 'state/utils/http'

import { API_BASE_URL } from 'src/settings'


function* fetchChatrooms(action) {
    try {
        yield put(actions.failFetchChatrooms('Hola!'))
        // const { response, timeout } = yield race({
        //     response: call(
        //         fetch,
        //         `${API_BASE_URL}`,
        //         {
        //             method: 'POST',
        //             body: JSON.stringify(action.payload),
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         },
        //     ),
        //     timeout: delay(3000),
        // })

        // if (response && http.isSuccessful(response.status)) {
        //     const algo = yield response.json()
        //     console.log(algo)
        //     yield put(actions.completeFetchChatrooms({}))
        // } else {
        //     const { non_field_errors } = yield response.json()
        //     yield put(actions.failFetchChatrooms(non_field_errors[0]))
        // }
    } catch (error) {
        yield put(actions.failFetchChatrooms('Connection failed!'))
    }
}

export function* watchFetchChatroomsStarted() {
    yield takeEvery(
        types.FETCH_CHATROOMS_STARTED,
        fetchChatrooms,
    )
}
