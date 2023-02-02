import React from 'react'
import Button from '../../generic/Button'
import Input from '../../generic/Input'
import {app, db_fire, firestore} from "../../firebase/firebase_config";
import {EmailAuthProvider, getAuth, reauthenticateWithCredential} from "firebase/auth";
import Alert from "../../generic/Alert";
import {useNavigate} from "react-router-dom";
import 'firebase/compat/firestore';
import { doc, updateDoc } from "firebase/firestore";

function ChangeUsernameModal({toggleModal}: any) {
    const [newUsername, setNewUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [alert, setAlert] = React.useState('');
    const auth = getAuth(app);
    const user = auth.currentUser;
    const navigate = useNavigate();

    async function changeUsername(e:any, password:string, user:any, newUsername:string) {
        e.preventDefault();
        const collection = db_fire.collection("users_details");
        const credential = EmailAuthProvider.credential(
            auth.currentUser?.email as string,
            password
        )

        try {
            const result = await reauthenticateWithCredential(
                user,
                credential
            )
        } catch (err) {
            console.error(err);
            setAlert("Incorrect password!");
        }

        collection.get().then((snapshot) => {
            snapshot.forEach(element => {
                if(element.data().email == user?.email) {
                    const docRef = doc(firestore, "users_details", element.id);
                    updateDoc(docRef, {
                    username: newUsername
                    })
                    setAlert("Username changed!");
                }
            })
        })
    }

  return (
    <div className="settingsModal">
        <div className="modalWrapper changeUsernameModal">
            <div className="modalTitle">Change username</div>
             <form onSubmit={(e) => {changeUsername(e, password, user, newUsername)}}>
                 <div>Enter new username</div>
                <Input placeHolderText='Enter new username' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setNewUsername(e.target.value)}}
                 ></Input>
                <div>Enter your password</div>
                <Input placeHolderText='Enter your password' cssClasses={['modal_input']}
                 onChangeFunction={(e) => {setPassword(e.target.value)}}
                 ></Input>
                 <Alert
                    text={alert}
                    cssClasses={["alert"]}
                 />
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default ChangeUsernameModal