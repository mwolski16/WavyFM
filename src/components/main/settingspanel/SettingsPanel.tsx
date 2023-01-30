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

function SettingsPanel() {

    const [changeUsername, setChangeUsername] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [logout, setLogout] = useState(false);
    const [disableAccount, setDisableAccount] = useState(false);

  return (
    <div>
        <div>
            <div className={changeUsername ? "" : "disabled"}>
                <ChangeUsernameModal></ChangeUsernameModal>
            </div>
            <div className={changePassword ? "" : "disabled"}>
                <ChangePasswordModal></ChangePasswordModal>
            </div>
            <div className={changeEmail ? "" : "disabled"}>
                <ChangeEmailModal></ChangeEmailModal>
            </div>
            <div className={logout ? "" : "disabled"}>
                <LogoutModal></LogoutModal>
            </div>
            <div className={disableAccount ? "" : "disabled"}>
                <DisableAccountModal></DisableAccountModal>
            </div>
        </div>
        <div className="navbar">
            <NavBar></NavBar>
        </div>
        <div>
            <div>
                <ProfilePicture></ProfilePicture>
            </div>
            <div>
                <Input></Input>
                <Input></Input>
            </div>
            <div>
                <Button type="button" text="Reset Password" onClick={() => {setChangePassword(!changePassword)}}></Button>
                <Button type="button" text="Change e-mail" onClick={() => {setChangeEmail(!changeEmail)}}></Button>
                <Button type="button" text="Change username" onClick={() => {setChangeUsername(!changeUsername)}}></Button>
            </div>
            <div>
                <Button type="button" text="Log out" onClick={() => {setLogout(!logout)}} ></Button>
                <Button type="button" text="Disable Account" onClick={() => {setDisableAccount(!disableAccount)}} ></Button>
            </div>
        </div>
    </div>
  )
}

export default SettingsPanel