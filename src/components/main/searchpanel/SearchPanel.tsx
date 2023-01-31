import React from 'react'
import NavBar from '../../generic/NavBar'
import '../mainApp.scss'
import SearchBar from "../../generic/SearchBar";


function SearchPanel() {
  return (
    <div className="main">
        <div className="searchPanel">
            <h1 className="panelHeader">Search</h1>
            <div className="searchbar">
                <SearchBar/>
            </div>
            <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
    </div>
  )
}

export default SearchPanel