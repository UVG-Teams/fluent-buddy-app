import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth, * as authSelectors from './auth'
import signUp, * as signUpSelectors from './signUp'

const reducer = combineReducers({
    auth,
    signUp,
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

/* Sign up */
export const getIsSigningUp = state => signUpSelectors.getIsSigningUp(state.signUp)
export const getSignUpError = state => signUpSelectors.getSignUpError(state.signUp)