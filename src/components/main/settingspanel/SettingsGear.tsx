import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from '../../generic/ButtonWithImage';
import './SettingsGear.scss'


function SettingsGear() {

  const navigate = useNavigate();

  return (
    <div>
        <ButtonWithImage svgName='gear.svg' cssClasses={['main_settings', 'settingsBtn']} onClick={() => { navigate('/settings', {replace: true})}} imgSize='40px'></ButtonWithImage>
   </div>
    
  )
}

export default SettingsGear