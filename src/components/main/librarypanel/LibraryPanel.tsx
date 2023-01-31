import React from 'react'
import NavBar from '../../generic/NavBar'
import '../MainApp.scss'
import SettingsGear from "../settingspanel/SettingsGear";
import ProfilePicture from "../profilepanel/ProfilePicture";

function LibraryPanel() {
  return (
      <div className="main">
          <div className="libraryPanel">
              <div className="libraryPanelHeaderWrapper">
                  <h1 className="panelHeader">My profile</h1>
                  <SettingsGear/>
              </div>
              <div className="libraryPanelProfileWrapper">
                  <ProfilePicture imgSize="150px"/>
                  <span>[username]</span>
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