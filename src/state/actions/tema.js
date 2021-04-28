import * as types from 'state/types/tema'

export const startSetTheme = (user, tema) => ({
    type: types.THEME_SET_STARTED,
    payload: {user, tema},
})

export const completeSetTheme = () => ({
    type: types.THEME_SET_COMPLETED,
})

export const failSetTheme = error => ({
    type: types.THEME_SET_FAILED,
    payloadP: { error },
})

export const startGetTheme = user => ({
    type: types.THEME_GET_STARTED,
    payload: {user},
})

export const completeGetTheme = theme => ({
    type: types.THEME_GET_COMPLETED,
    payload: theme,
})

export const failGetTheme = error => ({
    type: types.THEME_GET_FAILED,
    payload: { error },
})
