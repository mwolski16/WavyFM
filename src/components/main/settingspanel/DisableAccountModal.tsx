import React, { useState } from 'react'
import Button from '../../generic/Button'
import {deleteUser, getAuth, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import {app, db_fire} from "../../firebase/firebase_config";
import {useNavigate} from "react-router-dom";
import Input from "../../generic/Input";
import firebase from "firebase/compat/app";

function DisableAccountModal({toggleModal}: any) {
    const navigate = useNavigate();
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [password, setPassword] = React.useState('');

    const auth = getAuth(app);
    const user = auth.currentUser;


    async function deleteUserFromDatabase() {
        const userDoc = db_fire.collection("users_details").where('email','==',user?.email);
        const snapshot = await userDoc.get();
        snapshot.forEach((doc) => doc.ref.delete());
    }
    async function deleteAccount(e:any, password:string, user:any) {
        e.preventDefault();
        const credential = EmailAuthProvider.credential(
            auth.currentUser?.email as string,
            password
        )

        const result = await reauthenticateWithCredential(
            user,
            credential
        )

        try {
            await deleteUser(result.user);
            await deleteUserFromDatabase();
            navigate('/', {replace: true});
        }  catch(err) {
            console.log(err)
        }
    }

    const [usernameInput, setUsernameInput] = useState('');

  return (
    <div className="settingsModal">
        <div className="modalWrapper disableAccountModal">
            <div className="modalTitle">You are going to disable your account</div>
            <div className="modalCheckboxWrapper">
                <input type="checkbox" onClick={(e) => {setCheckboxChecked(!checkboxChecked)}}></input>
                <span>I wish to disable my account</span>
            </div>
            <form onSubmit={(e) => {deleteAccount(e, password, user)}}>
                <div>Enter your password</div>
                <Input placeHolderText='Enter your password' cssClasses={['modal_input']}
                       onChangeFunction={(e) => {setPassword(e.target.value)}}
                ></Input>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Yes' type="submit" isDisabled={!checkboxChecked}/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='No' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default DisableAccountModal