import React, { useState } from 'react'
import NavBar from '../../generic/NavBar'
import './SettingsPanel.scss'
import '../MainApp.scss'
import ProfilePicture from '../profilepanel/ProfilePicture'
import Input from '../../generic/Input'
import Button from '../../generic/Button'
import ChangeUsernameModal from './ChangeUsernameModal'
import ChangePasswordModal from './ChangePasswordModal'
import ChangeEmailModal from './ChangeEmailModal'
import "../mainApp.scss"
import LogoutModal from './LogoutModal'
import DisableAccountModal from './DisableAccountModal'
import SettingsGear from "./SettingsGear";
import {app, db_fire} from "../../firebase/firebase_config";
import {getAuth} from "firebase/auth";

function SettingsPanel() {

    const [changeUsername, setChangeUsername] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [logout, setLogout] = useState(false);
    const [disableAccount, setDisableAccount] = useState(false);
    const [usernameGet, setUsernameGet] = useState('');
    const [emailGet, setEmailGet] = useState('');

    const auth = getAuth(app);
    const user = auth.currentUser;
    async function getUsernameAndEmail() {
        const collection = db_fire.collection("users_details");
        collection.get().then((snapshot) => {
            snapshot.forEach(element => {
                if(element.data().email == user?.email) {
                    setUsernameGet(element.data().username);
                    setEmailGet(element.data().email);
                }
            })
        })
    }
        const callFunction = getUsernameAndEmail();

  return (
    <div className="main">
        <div className="settingsPanel">
            <div>
                <div className={changePassword ? "" : "disabled"}>
                    <ChangePasswordModal toggleModal={() => {setChangePassword(!changePassword)}}></ChangePasswordModal>
                </div>
                <div className={changeUsername ? "" : "disabled"}>
                    <ChangeUsernameModal toggleModal={() => {setChangeUsername(!changeUsername)}}></ChangeUsernameModal>
                </div>
                <div className={logout ? "" : "disabled"}>
                    <LogoutModal toggleModal={() => {setLogout(!logout)}}></LogoutModal>
                </div>
                <div className={disableAccount ? "" : "disabled"}>
                    <DisableAccountModal toggleModal={() => {setDisableAccount(!disableAccount)}}></DisableAccountModal>
                </div>
            </div>
            <div>
                <h1 className="panelHeader">Settings</h1>
                <div className="settingsPanelProfileWrapper">
                    <ProfilePicture imgSize="45px"></ProfilePicture>
                    <div className="settingsPanelViewProfileWrapper">
                        <span className="settingsPanelUsername">{usernameGet}</span>
                        <span className="settingsPanelView">View profile</span>
                    </div>
                </div>
                <div className="vectorLine"/>
                <div className="settingsPanelProfileDetailsWrapper">
                    <div className="settingsPanelProfileInfo">
                        <span className="profileInfoTitle">E-mail:</span>
                        <span>{emailGet}</span>
                    </div>
                    <div className="settingsPanelProfileInfo">
                        <span className="profileInfoTitle">Username:</span>
                        <span>{usernameGet}</span>
                    </div>
                </div>
                <div className="vectorLine"/>
                <div className="settingsPanelManageAccountWrapper">
                    <Button type="button" text="Reset Password" cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]} onClick={() => {setChangePassword(!changePassword)}}></Button>
                    <Button type="button" text="Change username" cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]} onClick={() => {setChangeUsername(!changeUsername)}}></Button>
                </div>
                <div className="settingsPanelManageAccountWrapper">
                    <Button type="button" text="Log out" cssClasses={["settingsScreenBtn mediumBtn logoutBtn"]} onClick={() => {setLogout(!logout)}} ></Button>
                    <Button type="button" text="Disable Account" cssClasses={["settingsScreenBtn mediumBtn disableAccountBtn"]} onClick={() => {setDisableAccount(!disableAccount)}} ></Button>
                </div>
                <div className="settingsPanelAppVersionWrapper">
                    <span>App version</span>
                    <span>[appVersion]</span>
                </div>
            </div>
            <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
    </div>
  )
}

export default SettingsPanel