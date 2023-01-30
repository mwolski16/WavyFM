import React, { useState } from 'react'
import Button from '../../generic/Button';
import Input from '../../generic/Input';

function ChangeEmailModal() {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');

    function changeEmail(e: any) {
        //TODO PODPIAC BAZE DANYCH
        e.preventDefault();
        
    }

  return (
    <div>
        <form onSubmit={(e) => {changeEmail(e)}}>
            <div>Enter current e-mail:</div>
            <Input placeHolderText='current e-mail'
             onChangeFunction={(e) => {setCurrentEmail(e.target.value)}}
             ></Input>
            <div>Enter new e-mail:</div>
            <Input placeHolderText='new e-mail'
             onChangeFunction={(e) => {setNewEmail(e.target.value)}}
             ></Input>
            <div>Enter your password:</div>
            <Input placeHolderText='password'
            onChangeFunction={(e) => {setPassword(e.target.value)}}
            ></Input>
            <Button text='confirm' type="submit"></Button>
            <Button text='cancel' type="button"></Button>
        </form>
    </div>
  )
}

export default ChangeEmailModal