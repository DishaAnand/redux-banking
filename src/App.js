import React from 'react'
import AccountStatus from './components/AccountStatus'
import Auth from './components/Auth'
import Balance from './components/Balance'
import Banking from './components/Banking'

const App = () => {
  return (
    <div>
      <Auth />
      <Balance />
      <AccountStatus />
      <Banking />
    </div>
  )
}

export default App
