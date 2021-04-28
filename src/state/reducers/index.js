import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth, * as authSelectors from './auth'
import selects, * as selectsSelectors from './selects'
import themeReducer, * as themeSelectors from './tema'

const reducer = combineReducers({
    auth,
    selects,
    themeReducer,
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

export const getTheme = state => themeSelectors.getTheme(state.themeReducer)
export const isFetchingTheme = state => themeSelectors.isFetchingTheme(state.themeReducer)
export const isUpdatingTheme = state => themeSelectors.isUpdatingTheme(state.themeReducer)
export const getThemeError = state => themeSelectors.getThemeError(state.themeReducer)
