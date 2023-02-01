import React, { useState } from 'react'
import Button from '../../generic/Button';
import Input from '../../generic/Input';

function ChangeEmailModal({toggleModal} : {toggleModal:any}) {

    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');

    function changeEmail(e: any) {
        //TODO PODPIAC BAZE DANYCH
        e.preventDefault();
        
    }

  return (
    <div className="settingsModal">
        <div className="modalWrapper changeEmailModal">
            <div className="modalTitle">Change e-mail</div>
            <form onSubmit={(e) => {changeEmail(e)}}>
                <div>Enter current e-mail:</div>
                <Input placeHolderText='current e-mail' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setCurrentEmail(e.target.value)}}
                 ></Input>
                <div>Enter new e-mail:</div>
                <Input placeHolderText='new e-mail' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setNewEmail(e.target.value)}}
                 ></Input>
                <div>Enter your password:</div>
                <Input placeHolderText='password' cssClasses={['modal_input']}
                onChangeFunction={(e) => {setPassword(e.target.value)}}
                ></Input>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default ChangeEmailModal