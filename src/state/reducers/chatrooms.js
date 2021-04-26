import * as types from 'state/types/chatrooms'
import { combineReducers } from 'redux'


const byid = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_CHATROOMS_STARTED: {
            return {}
        }
        case types.FETCH_CHATROOMS_COMPLETED: {
            return action.payload.entities
        }
        default: {
            return state
        }
    }
}

const order = (state = [] , action) => {
    switch (action.type) {
        case types.FETCH_CHATROOMS_STARTED: {
            return []
        }
        case types.FETCH_CHATROOMS_COMPLETED: {
            return action.payload.order
        }
        default: {
            return state
        }
    }
}

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.FETCH_CHATROOMS_STARTED: {
            return true
        }
        case types.FETCH_CHATROOMS_COMPLETED: {
            return false
        }
        case types.FETCH_CHATROOMS_FAILED: {
            return false
        }
        default: {
            return state
        }
    }
}

const error = (state = null, action) => {
    switch(action.type) {
        case types.FETCH_CHATROOMS_STARTED: {
            return null
        }
        case types.FETCH_CHATROOMS_COMPLETED: {
            return null
        }
        case types.FETCH_CHATROOMS_FAILED: {
            return action.payload.error
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    byid,
    order,
    isFetching,
    error,
})

export const getChatroom = (state, id) =>  state.byid[id]
export const getChatrooms = state => state.order.map(id => getChatroom(state, id))
export const isFetchingChatrooms = state => state.isFetching
export const getChatroomError = state => state.error
