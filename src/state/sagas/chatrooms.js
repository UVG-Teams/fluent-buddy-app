import {
    takeEvery,
    put,
    select,
} from 'redux-saga/effects'
import firebase from 'firebase'

import * as selectors from 'state/reducers'
import * as actions from 'state/actions/chatrooms'
import * as types from 'state/types/chatrooms'
import * as http from 'state/utils/http'

import { API_BASE_URL } from 'src/settings'


function* createChatroom(action) {
    try {
        const current_user_firebase_uid = yield select(selectors.getFirebaseUserUID)
        const bot_uid = `${action.payload.language}-${action.payload.gender}`

        const members = {}
        members[current_user_firebase_uid] = {
            full_name: 'Yo',
        }
        members[bot_uid] = {
            full_name: action.payload.name,
        }

        const chatroomData = {
            members_uids: [
                current_user_firebase_uid,
                bot_uid,
            ],
            members: members,
            last_message: null,
        }

        firebase.firestore().collection('chatrooms').add(chatroomData)

    } catch (error) {
        console.log(error)
        yield put(actions.failCreateChatroom('Connection failed!'))
    }
}

export function* watchCreateChatroomStarted() {
    yield takeEvery(
        types.CREATE_CHATROOM_STARTED,
        createChatroom,
    )
}
