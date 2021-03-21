import { LOCAL_URL } from 'src/localsettings'

export const API_BASE_URL = LOCAL_URL

// Django token expiration = 1800 seconds
export const tokenReviewTime = 300 * 1000 // Seconds * 1000

// Porcentaje de vida util del tiempo
// antes de validar token
export const validTimePercentage = 0.75

export const colors = {
    darkBlue1: '#22548B',
    darkBlue2: '#255C99',
    lightBlue: '#86BBD8',
    darkGreen1: '#01200F',
    darkGreen2: '#3E885B',
    lightGreen: '#C4FFB2',
}

export const layoutColors = {
    color1: colors.darkGreen2,
    color2: colors.darkGreen1,
    color3: colors.lightGreen,
    shadow: '#161716',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#CCCCCC',
}
