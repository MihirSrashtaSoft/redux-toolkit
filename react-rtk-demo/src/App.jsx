import './App.css'
import React from 'react'

import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className="App" >
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
