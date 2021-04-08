import * as types from 'state/types/signUp';

export const startSignUp = (username, password, email) => ({
    type: types.SIGN_UP_STARTED,
    payload: {
        username,
        password,
        email,
    },
});

export const completeSignUp = () => ({
    type: types.SIGN_UP_COMPLETED,
});

export const failSignUp = error => ({
    type: types.SIGN_UP_FAILED,
    payload: { error },
});