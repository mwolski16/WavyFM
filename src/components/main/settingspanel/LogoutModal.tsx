import React from 'react'
import Button from '../../generic/Button'

function LogoutModal({toggleModal}) {

    function logout() {
        //TODO PODPIAC BAZE DANYCH
        console.log("logging out");
    }
  return (
    <div className="settingsModal">
        <div className="modalWrapper logoutModal">
            <div className="modalTitle">Do you wish to log out?</div>
            <form>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Yes' type="submit"/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='No' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default LogoutModal