import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from '../../generic/ButtonWithImage'

interface PictureProps {
    imgSize?: string
}
function ProfilePicture({imgSize} : PictureProps) {

    const navigate = useNavigate();

    function getProfilePicture(): string {
        return 'logo.png'
    }
  return (
        <ButtonWithImage imgName={getProfilePicture()} cssClasses={['main_settings', 'profilePicture']} onClick={() => {navigate('/settings', {replace: true})}} imgSize={imgSize}></ButtonWithImage>
  )
}

export default ProfilePicture