import React, {useState} from 'react'
import NavBar from '../../generic/NavBar'
import '../MainApp.scss'
import SettingsGear from "../settingspanel/SettingsGear";
import ProfilePicture from "../profilepanel/ProfilePicture";
import {app, db_fire} from "../../firebase/firebase_config";
import {getAuth} from "firebase/auth";

function LibraryPanel() {
    const auth = getAuth(app);
    const user = auth.currentUser;
    const [usernameInput, setUsernameInput] = useState('');
    async function getUsername() {
        const collection = db_fire.collection("users_details");
        collection.get().then((snapshot) => {
            snapshot.forEach(element => {
                if(element.data().email == user?.email) {
                    setUsernameInput(element.data().username);
                }
            })
        })
    }
    const callFunction = getUsername();

    return (
      <div className="main">
          <div className="libraryPanel">
              <div className="libraryPanelHeaderWrapper">
                  <h1 className="panelHeader">My profile</h1>
                  <SettingsGear/>
              </div>
              <div className="libraryPanelProfileWrapper">
                  <ProfilePicture imgSize="150px"/>
                  <span>{usernameInput}</span>
                  <div className="vectorLine"/>
              </div>
              <div className="libraryPanelRecentlyPlayedWrapper">
                  <div className="libraryPanelSectionHeader">Recently played</div>
                  <div className="libraryEmptyContent">Nothing here yet...</div>
              </div>
              <div className="libraryPanelYourPlaylistsWrapper">
                  <div className="libraryPanelSectionHeader">Your playlists</div>
              </div>
              <div className="navbar">
                  <NavBar></NavBar>
              </div>
          </div>
      </div>
  )
}

export default LibraryPanel