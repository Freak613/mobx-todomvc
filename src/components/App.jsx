import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Header from './Header'
import MainSection from './MainSection'

@observer
class App extends Component {
  render() {
    // could use context, but let's keep it explicit
    const { store } = this.props
    return (
      <div>
        <Header store={store} />
        <MainSection store={store} />
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App