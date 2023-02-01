import React, {useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import GenrePanel from './genrepanel/GenrePanel';
import './mainApp.scss';
import NewReleases from './newreleases/NewReleases';

import TrendingPlaylists from './trendingplaylists/TrendingPlaylists';

import mockGenres from '../mockGenres.json';
import SettingsGear from './settingspanel/SettingsGear';
import NavBar from '../generic/NavBar';
import ProfilePicture from './profilepanel/ProfilePicture';
import {app, db_fire} from "../firebase/firebase_config";
import {getAuth} from "firebase/auth";
import TrendingAlbums from "./trendingplaylists/TrendingPlaylists";


function MainApp() {
    const location = useLocation();
    const navigate = useNavigate();

    function getGenres(items: any) {

        let genresArray = items.slice(2, 7).map((item: any) => {
            return item.name;
        });
        return genresArray;
    }
        const auth = getAuth(app);
        const user = auth.currentUser;
        const [usernameInput, setUsernameInput] = useState('');

        async function getUsername() {
            const collection = db_fire.collection("users_details");
            collection.get().then((snapshot) => {
                snapshot.forEach(element => {
                    if (element.data().email == user?.email) {
                        setUsernameInput(element.data().username);
                    }
                })
            })
        }

        getUsername();

        return (
            <div className="main">
                <div className="navbar">
                    <NavBar></NavBar>
                </div>
                <div className="main_headerWrapper">
                    <SettingsGear></SettingsGear>
                    <ProfilePicture imgSize="45px"/>
                </div>
                <div className="headerInfo">
                    <span>Welcome, {usernameInput}</span>
                </div>
                <TrendingPlaylists></TrendingPlaylists>
                <NewReleases></NewReleases>
                {getGenres(mockGenres).map((genre: string, index: number) => {
                    return <GenrePanel key={index} genre={genre}></GenrePanel>
                })
                }
                <div className="spaceHolder" style={{height:75}}/>
            </div>
        )
}

export default MainApp