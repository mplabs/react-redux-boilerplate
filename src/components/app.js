import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, store } from '../store'
import { bindActions } from '../utils'

@connect(state => state.app, bindActions(actions))
export class App extends Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <div className="app">
        <h1>A simple react  + redux-observables boilerplate</h1>
      </div>
    )
  }
}
