import React from 'react'
import Button from '../../generic/Button'
import {getAuth, signOut} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {useNavigate} from "react-router-dom";
import {app} from "../../firebase/firebase_config";

const auth = getAuth(app);
function LogoutModal({toggleModal} : {toggleModal:any}) {

    const navigate = useNavigate();

    async function logout(e:any) {
        e.preventDefault();
        await signOut(auth);
        navigate('/', {replace: true})
        console.log("logging out");
    }
  return (
    <div className="settingsModal">
        <div className="modalWrapper logoutModal">
            <div className="modalTitle">Do you wish to log out?</div>
            <form onSubmit={(e) => {logout(e)}}>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Yes' type="submit" />
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='No' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default LogoutModal