import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {app, firestore} from "../../firebase/firebase_config"


function ChangePasswordModal({toggleModal} : {toggleModal:any}) {
    const auth = getAuth(app);
    const [email, setEmail] = React.useState('');
    async function changePassword(e: any, email: string) {
        e.preventDefault();
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }
  return (
    <div className="settingsModal">
        <div className="modalWrapper changePasswordModal">
            <div className="modalTitle">Change password</div>
            <form onSubmit={(e) => {changePassword(e, email)}}>
                <div>Enter e-mail address:</div>
                <Input placeHolderText='e-mail address' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setEmail(e.target.value)}}
                 ></Input>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default ChangePasswordModal