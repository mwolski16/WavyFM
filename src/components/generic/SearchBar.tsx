import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonWithImage from './ButtonWithImage'
import Input from "./Input";

function SearchBar() {
    const navigate = useNavigate();
    return (
        <div className='searchbar_container'>
            <img className="searchIcon" src="src/components/icons/svg/loopa.svg" />
            <Input cssClasses={["searchbar_input"]} placeHolderText="what do you want to find?"/>
        </div>
    )
}

export default SearchBar