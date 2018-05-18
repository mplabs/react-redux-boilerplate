import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store, actions } from './store'
import { App } from './components'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-react-root')
)
