import * as types from 'state/types/selects'


export const setModalVisible = isModalVisible => ({
    type: types.TOGGLE_CREATE_CHAT_MODAL,
    payload: isModalVisible,
})