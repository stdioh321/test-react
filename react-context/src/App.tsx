import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { getContext } from './context/Theme'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme, ThemeTypes } = getContext()
  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
