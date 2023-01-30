import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'

function ChangeUsernameModal() {
    const [newUsername, setNewUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function changeUsername(e: any) {
        //TODO PODPIAC BAZE DANYCH
        e.preventDefault();
        console.log("changing username");
    }

  return (
    <div>
         <form onSubmit={(e) => {changeUsername(e)}}>
            <div>Change username</div>
            <Input placeHolderText='Enter new username'
             onChangeFunction={(e) => {setNewUsername(e.target.value)}}
             ></Input>
            <div>Enter new password</div>
            <Input placeHolderText='Enter your password'
             onChangeFunction={(e) => {setPassword(e.target.value)}}
             ></Input>
            <Button text='confirm' type="submit"></Button>
            <Button text='cancel' type="button"></Button>
        </form>
    </div>
  )
}

export default ChangeUsernameModal