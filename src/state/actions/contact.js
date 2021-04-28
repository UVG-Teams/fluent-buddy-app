export const saveContactMessage = (id, message) => ({
    type: 'SAVING_CONTACT_MESSAGE',
    payload: {id, message},
})

export const failedContactMessage = error => ({
    type: 'CONTACT_MESSAGE_FAILED',
    payload: { error },
})