import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Login from './components/login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App