import * as React from 'react'

import { Resume } from './resume'

// @ts-ignore
const styles = require('./App.css')

function App() {
  return (
    <div className="App" style={{ maxWidth: 1200, margin: 'auto', paddingLeft: 100, paddingRight: 100 }}>
      <Resume />
    </div>
  )
}

export default App
