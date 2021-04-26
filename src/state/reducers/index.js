import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth, * as authSelectors from './auth'
import selects, * as selectsSelectors from './selects'
import chatrooms, * as chatroomsSelectors from './chatrooms'

const reducer = combineReducers({
    auth,
    selects,
    chatrooms,
    form: formReducer,
})

export default reducer

export const getToken = state => authSelectors.getToken(state.auth)
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth)
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth)
export const isAuthenticated = state => getToken(state) !== null
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth)
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth)
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth)
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth)
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth)
export const getIsSigningUp = state => authSelectors.getIsSigningUp(state.auth)

export const getIsModalVisible = state => selectsSelectors.getIsModalVisible(state.selects)

export const getChatroom = (state, id) =>  chatroomsSelectors.getChatroom(state.chatrooms, id)
export const getChatrooms = state => chatroomsSelectors.getChatrooms(state.chatrooms)
export const isFetchingChatrooms = state => chatroomsSelectors.isFetchingChatrooms(state.chatrooms)
export const getChatroomError = state => chatroomsSelectors.getChatroomError(state.chatrooms)
