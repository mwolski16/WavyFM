import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'

function ChangePasswordModal() {

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
    <div>
        <form onSubmit={(e) => {changePassword(e)}}>
            <div>Change password</div>
            <Input placeHolderText='current password'
             onChangeFunction={(e) => {setCurrentPassword(e.target.value)}}
             ></Input>
            <div>Enter new password</div>
            <Input placeHolderText='new password'
             onChangeFunction={(e) => {setNewPassword(e.target.value)}}
             ></Input>
            <div>Re-enter new password</div>
            <Input placeHolderText='new password'
            onChangeFunction={(e) => {setReEnterPassword(e.target.value)}}
            ></Input>
            <Button text='confirm' type="submit"></Button>
            <Button text='cancel' type="button"></Button>
        </form>
    </div>
  )
}

export default ChangePasswordModal