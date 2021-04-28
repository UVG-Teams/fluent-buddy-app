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
