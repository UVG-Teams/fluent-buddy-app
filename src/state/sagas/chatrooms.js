import {
    takeEvery,
    put,
    select,
} from 'redux-saga/effects'
import { getFirestore } from "firebase/firestore"
import { collection, query, where, onSnapshot } from "firebase/firestore"

import * as selectors from 'state/reducers'
import * as actions from 'state/actions/chatrooms'
import * as types from 'state/types/chatrooms'
import * as http from 'state/utils/http'

import { API_BASE_URL } from 'src/settings'


function* fetchChatrooms(action) {
    try {
        const firebaseDB = getFirestore()
        const q = query(collection(firebaseDB, 'chatrooms'))

        onSnapshot(q, querySnapshot => {
            const chatrooms = []
            querySnapshot.forEach(doc => chatrooms.push(doc.data()))
            console.log('Current chatrooms: ', chatrooms)
            // yield put(actions.completeFetchChatrooms({}))
        })

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
