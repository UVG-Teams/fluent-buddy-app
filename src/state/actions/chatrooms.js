import * as types from 'state/types/chatrooms'


export const startCreateChatroom = chatroomData => ({
    type: types.CREATE_CHATROOM_STARTED,
    payload: chatroomData,
})

export const completeCreateChatroom = chatroomUid => ({
    type: types.CREATE_CHATROOM_COMPLETED,
    payload: { chatroomUid },
})

export const failCreateChatroom = error => ({
    type: types.CREATE_CHATROOM_FAILED,
    payload: { error },
})


export const startFetchChatrooms = () => ({
    type: types.FETCH_CHATROOMS_STARTED,
})

export const completeFetchChatrooms = (entities, order) => ({
    type: types.FETCH_CHATROOMS_COMPLETED,
    payload: { entities, order },
})

export const failFetchChatrooms = error => ({
    type: types.FETCH_CHATROOMS_FAILED,
    payload: { error },
})
