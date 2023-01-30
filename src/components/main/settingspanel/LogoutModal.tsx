import React from 'react'
import Button from '../../generic/Button'

function LogoutModal() {

    function logout() {
        //TODO PODPIAC BAZE DANYCH
        console.log("logging out");
    }
  return (
    <div>
        <div>Do you wish to log out?</div>
        <form>
            <Button text='Yes' type="submit"></Button>
            <Button text='No' type="button"></Button>
        </form>
    </div>
  )
}

export default LogoutModal