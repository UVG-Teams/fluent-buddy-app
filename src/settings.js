import { color } from 'react-native-reanimated'
import { LOCAL_URL } from 'src/localsettings'

export const API_BASE_URL = LOCAL_URL

// Django token expiration = 1800 seconds
export const tokenReviewTime = 300 * 1000 // Seconds * 1000

// Porcentaje de vida util del tiempo
// antes de validar token
export const validTimePercentage = 0.75

export const colors = {
    bdazzledBlue: '#22548B',
    lapisLazuli: '#255C99',
    darkSkyBlue: '#86BBD8',
    darkGreen: '#01200F',
    seaGreen: '#3E885B',
    teaGreen: '#C4FFBE',
}

export const layoutColors = {
    seaGreen: colors.seaGreen,
    teaGreen: colors.teaGreen,
    darkGreen: colors.darkGreen,
    bdazzledBlue: colors.bdazzledBlue,
    lapisLazuli: colors.lapisLazuli,
    darkSkyBlue: colors.darkSkyBlue,
    shadow: '#161716',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#CCCCCC',
}
