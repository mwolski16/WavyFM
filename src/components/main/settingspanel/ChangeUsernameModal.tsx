import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'

function ChangeUsernameModal({toggleModal}: any) {
    const [newUsername, setNewUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function changeUsername(e: any) {
        //TODO PODPIAC BAZE DANYCH
        e.preventDefault();
        console.log("changing username");
    }

  return (
    <div className="settingsModal">
        <div className="modalWrapper changeUsernameModal">
            <div className="modalTitle">Change username</div>
             <form onSubmit={(e) => {changeUsername(e)}}>
                 <div>Enter new username</div>
                <Input placeHolderText='Enter new username' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setNewUsername(e.target.value)}}
                 ></Input>
                <div>Enter your password</div>
                <Input placeHolderText='Enter your password' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setPassword(e.target.value)}}
                 ></Input>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default ChangeUsernameModal