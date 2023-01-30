import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import LibraryPanel from './components/main/librarypanel/LibraryPanel'
import MainApp from './components/main/MainApp'
import ProfilePanel from './components/main/profilepanel/ProfilePanel'
import SearchPanel from './components/main/searchpanel/SearchPanel'
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
          <Route path="/search" element={<SearchPanel/>}/>
          <Route path="/library" element={<LibraryPanel/>}/>
          <Route path="/profile" element={<ProfilePanel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
