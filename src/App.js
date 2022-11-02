import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterScreen from './UserScreen/RegisterScreen'
import LoginScreen from './UserScreen/LoginScreen'
import Header from './components/Header'
import StartGame from './game/StartGame'
import GameScreen from './game/GameScreen'
import ProfileScreen from './UserScreen/ProfileScreen'
import WinningScreen from './game/WinningScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<StartGame />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/game' element={<GameScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/win' element={<WinningScreen />} />
          <Route path='/loose' element={<WinningScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
