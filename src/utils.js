import { bindActionCreators } from 'redux'

export const bindActions = actions => dispatch => ({
  ...bindActionCreators(actions, dispatch)
})
