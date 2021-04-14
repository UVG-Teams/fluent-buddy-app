import * as types from 'state/types/auth'


export const startLogin = user => ({
    type: types.AUTHENTICATION_STARTED,
    payload: user,
})

export const completeLogin = token => ({
    type: types.AUTHENTICATION_COMPLETED,
    payload: { token },
})

export const failLogin = error => ({
    type: types.AUTHENTICATION_FAILED,
    payload: { error },
})

export const logout = () => ({
    type: types.AUTHENTICATION_IDENTITY_CLEARED,
})

export const startTokenRefresh = () => ({
    type: types.TOKEN_REFRESH_STARTED,
})

export const completeTokenRefresh = newToken => ({
    type: types.TOKEN_REFRESH_COMPLETED,
    payload: { newToken },
})

export const failTokenRefresh = error => ({
    type: types.TOKEN_REFRESH_FAILED,
    payload: { error },
})

export const startSignUp = user => ({
    type: types.SIGN_UP_STARTED,
    payload: user,
})

export const completeSignUp = () => ({
    type: types.SIGN_UP_COMPLETED,
})

export const failSignUp = error => ({
    type: types.SIGN_UP_FAILED,
    payload: { error },
})
