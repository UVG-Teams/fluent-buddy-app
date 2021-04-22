import { combineReducers } from 'redux'

import * as types from 'state/types/selects'


const isModalVisible = (state = false, action) => {
    switch(action.type) {
        case types.TOGGLE_CREATE_CHAT_MODAL: {
            return action.payload
        }

        default: return state
    }
}

const selects = combineReducers({
    isModalVisible,
})

export default selects

export const getIsModalVisible = state => state.isModalVisible