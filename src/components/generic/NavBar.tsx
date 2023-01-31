import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from './ButtonWithImage'

function NavBar() {
    const navigate = useNavigate();
  return (
    <div className='navbar_container'>
        <ButtonWithImage onClick={() => {{ navigate('/search', {replace: true})}}} svgName='loopa.svg' imgSize='35px'></ButtonWithImage>
        <ButtonWithImage  onClick={() => {{ navigate('/', {replace: true})}}} svgName='home.svg' imgSize='35px'></ButtonWithImage>
        <ButtonWithImage  onClick={() => {{ navigate('/library', {replace: true})}}} svgName='library.svg' imgSize='35px'></ButtonWithImage>
    </div>
  )
}

export default NavBar