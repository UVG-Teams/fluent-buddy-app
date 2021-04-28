import { combineReducers } from 'redux'

import * as types from 'state/types/tema'


const theme = (state=null, action) => {
    switch (action.type){
        case types.THEME_GET_STARTED: {
            return null
        }
        case types.THEME_GET_COMPLETED: {
            return action.payload
        }
        case types.THEME_GET_FAILED: {
            return null
        }
        default: {
            return state
        }
    }
}

const isFetching = (state = false, action) => {
    switch(action.type){
        case types.THEME_GET_STARTED: {
            return true
        }
        case types.THEME_GET_COMPLETED: {
            return false
        }
        case types.THEME_GET_FAILED: {
            return false
        }
        default: {
            return state
        }
    }
}

const isUpdating = (state=false, action) => {
    switch (action.type) {
        case types.THEME_SET_STARTED: {
            return true
        }
        case types.THEME_SET_COMPLETED: {
            return false
        }
        case types.THEME_SET_FAILED: {
            return false
        }
        default: {
            return state
        }
    }
}

const error = (state=null, action) => {
    switch(action.type) {
        case types.THEME_GET_STARTED: {
            return null
        }
        case types.THEME_GET_COMPLETED: {
            return null
        }
        case types.THEME_GET_FAILED: {
            return action.payload
        }
        case types.THEME_SET_STARTED: {
            return null
        }
        case types.THEME_SET_COMPLETED: {
            return null
        }
        case types.THEME_SET_FAILED: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

const themeReducer = combineReducers({
    theme,
    isFetching,
    isUpdating,
    error,
})

export default themeReducer;

export const getTheme = state => state.theme
export const isFetchingTheme = state => state.isFetching
export const isUpdatingTheme = state => state.isUpdating
export const getThemeError = state => state.error