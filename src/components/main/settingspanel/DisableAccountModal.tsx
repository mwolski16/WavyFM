import React, { useState } from 'react'
import Button from '../../generic/Button'

function DisableAccountModal() {

    const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div>
        <div>You are going to disable your account</div>
        <div>
            <input type="checkbox" onClick={(e) => {setCheckboxChecked(!checkboxChecked)}}></input>
            <div>I wish to disable my account</div>
        </div>
        <form>
            <Button text='Yes' type="submit" isDisabled={checkboxChecked ? false : true}></Button>
            <Button text='No' type="button"></Button>
        </form>
    </div>
  )
}

export default DisableAccountModal