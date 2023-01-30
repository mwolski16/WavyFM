import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from '../../generic/ButtonWithImage'

function ProfilePicture() {

    const navigate = useNavigate();

    function getProfilePicture(): string {
        return 'logo.png'
    }
  return (
    <div>
        <ButtonWithImage imgName={getProfilePicture()} onClick={() => {navigate('/settings', {replace: true})}}></ButtonWithImage>
   </div>
  )
}

export default ProfilePicture