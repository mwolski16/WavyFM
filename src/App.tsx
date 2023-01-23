import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import MainApp from './components/main/mainApp'
import Register from './components/register/Register'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
