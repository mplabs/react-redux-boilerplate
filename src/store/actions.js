export const INIT = '[Application] Init'
export const MSG = '[Application] Message'

export const init = () => ({ type: INIT })
export const message = payload => ({ type: MSG, payload })
