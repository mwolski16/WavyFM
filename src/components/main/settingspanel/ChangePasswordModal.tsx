import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'

function ChangePasswordModal({toggleModal}) {

    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [reEnterPassword, setReEnterPassword] = React.useState('');

    function changePassword(e: any) {
        // TODO PODPIAC POD BAZE DANYCH
        e.preventDefault()
        console.log(e.target)
        if(!checkIfNewPasswordsMatch(reEnterPassword, newPassword)) {
            console.log("Passwords don't match", reEnterPassword, newPassword);
            return;
        }
    }

    function checkIfNewPasswordsMatch(inputNewPassword: string, newPassword: string) {
        // TODO PODPIAC POD BAZE DANYCH
        if (newPassword ===  inputNewPassword) {
            return true
        } else {
            return false
        }
    }
  return (
    <div className="settingsModal">
        <div className="modalWrapper changePasswordModal">
            <div className="modalTitle">Change password</div>
            <form onSubmit={(e) => {changePassword(e)}}>
                <div>Enter current password:</div>
                <Input placeHolderText='current password' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setCurrentPassword(e.target.value)}}
                 ></Input>
                <div>Enter new password</div>
                <Input placeHolderText='new password' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setNewPassword(e.target.value)}}
                 ></Input>
                <div>Re-enter new password</div>
                <Input placeHolderText='new password' cssClasses={['modal_input']}
                onChangeFunction={(e) => {setReEnterPassword(e.target.value)}}
                ></Input>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default ChangePasswordModal