import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import LibraryPanel from './components/main/librarypanel/LibraryPanel'
import ProfilePanel from './components/main/profilepanel/ProfilePanel'
import SearchPanel from './components/main/searchpanel/SearchPanel'
import SettingsPanel from './components/main/settingspanel/SettingsPanel'
import SongPanel from './components/main/songpanel/SongPanel'
import Register from './components/register/Register'
import MainApp from "./components/main/mainApp";
import Login from "./components/login/login";
import Reset from "./components/reset/Reset";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/main" element={<MainApp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/settings" element={<SettingsPanel/>}/>
          <Route path="/search" element={<SearchPanel/>}/>
          <Route path="/library" element={<LibraryPanel/>}/>
          <Route path="/profile" element={<ProfilePanel/>}/>
          <Route path="/music" element={<SongPanel/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
