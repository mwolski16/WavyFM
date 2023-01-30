import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from './ButtonWithImage'

function NavBar() {
    const navigate = useNavigate();
  return (
    <div className='navbar_container'>
        <ButtonWithImage onClick={() => {}} svgName='loopa.svg'></ButtonWithImage>
        <ButtonWithImage  onClick={() => {{ navigate('/', {replace: true})}}} svgName='home.svg'></ButtonWithImage>
        <ButtonWithImage  onClick={() => {}} svgName='library.svg'></ButtonWithImage>
    </div>
  )
}

export default NavBar