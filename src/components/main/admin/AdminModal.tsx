import React from 'react'
import Button from '../../generic/Button'
import {app} from "../../firebase/firebase_config";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import 'firebase/compat/firestore';
import Select from "../../generic/Select";
import {setDisplayElements} from "./adminConfig";

function AdminModal({toggleModal}: any) {
    const [displayElementsNumber, setDisplayElementsNumber] = React.useState('');
    const auth = getAuth(app);
    const user = auth.currentUser;
    const navigate = useNavigate();

    return (
        <div className="settingsModal">
            <div className="modalWrapper adminModal">
                <div className="modalTitle">Admin panel</div>
                <form onSubmit={e => {setDisplayElements(e, displayElementsNumber)}}>
                    <div className="modalLabel">Enter number of covers displayed (per row)</div>
                    <Select placeHolderText='Enter your password' cssClasses={['modal_input']}
                           onChangeFunction={(e) => {setDisplayElementsNumber(e.target.value)}}
                    ></Select>
                    <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Confirm' type="submit" onClick={toggleModal}/>
                    <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='Cancel' type="button" onClick={toggleModal}/>
                </form>
            </div>
        </div>
    )
}

export default AdminModal