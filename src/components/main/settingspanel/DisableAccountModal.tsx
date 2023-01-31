import React, { useState } from 'react'
import Button from '../../generic/Button'

function DisableAccountModal({toggleModal}) {

    const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div className="settingsModal">
        <div className="modalWrapper disableAccountModal">
            <div className="modalTitle">You are going to disable your account</div>
            <div>
                <input type="checkbox" onClick={(e) => {setCheckboxChecked(!checkboxChecked)}}></input>
                <div>I wish to disable my account</div>
            </div>
            <form>
                <Button cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]} text='Yes' type="submit" isDisabled={!checkboxChecked}/>
                <Button cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]} text='No' type="button" onClick={toggleModal}/>
            </form>
        </div>
    </div>
  )
}

export default DisableAccountModal