import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './componets/Welcome'
import SignupPage from './componets/SignupPage'
import LoginPage from './componets/LoginPage'
import PrivateRouter from './PrivateRouter'
import AccountSettings from './componets/AccountSettings'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Welcome/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
        <Route path = 'login' element = {<LoginPage/>}/>
        <Route element = {<PrivateRouter/>}>
          <Route path='account-settings' element = {<AccountSettings/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
