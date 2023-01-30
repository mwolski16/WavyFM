import React, { useState } from 'react'
import ButtonWithImage from '../../generic/ButtonWithImage';
import './SettingsGear.scss'

interface SettingsGearProps {
    onClick?: any;
}

function SettingsGear({onClick}: SettingsGearProps) {

  return (
    <div>
        <ButtonWithImage svgName='gear.svg' cssClasses={['main_settings', 'settingsBtn']} onClick={onClick}></ButtonWithImage>
   </div>
    
  )
}

export default SettingsGear