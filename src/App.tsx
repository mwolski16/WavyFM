import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import MainApp from './components/main/MainApp'
import SettingsPanel from './components/main/settingspanel/SettingsPanel'
import Register from './components/register/Register'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/settings" element={<SettingsPanel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
