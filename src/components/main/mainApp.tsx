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
import ButtonWithImage from "../generic/ButtonWithImage";
import AdminModal from "./admin/AdminModal";


function MainApp() {
    const location = useLocation();
    const navigate = useNavigate();
    getUsername();
    getIsAdmin();

        const auth = getAuth(app);
        const user = auth.currentUser;
        const [usernameInput, setUsernameInput] = useState('');
        const [isAdmin, setIsAdmin] = useState('');
        const [adminPanel, setAdminPanel] = useState(false);

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

        async function getIsAdmin() {
            const collection = db_fire.collection("users_details");
            collection.get().then((snapshot) => {
                snapshot.forEach(element => {
                    if (element.data().email == user?.email) {
                        setIsAdmin(element.data().isAdmin);
                    }
                })
            })
        }



        function adminViewRender (isAdmin:any) {
            if (isAdmin === 1) {
                return  (
                    <div className="adminButtonWrapper">
                        <ButtonWithImage cssClasses={["buttonWithImage"]} imgSize="20px"  svgName="edit.svg" onClick={() => {setAdminPanel(!adminPanel)}} />
                        <div onClick={() => {setAdminPanel(!adminPanel)}} >Edit view</div>
                    </div>
                )
            } else {
                return "";
            }
        }

        function getGenres(items: any) {

            let genresArray = items.slice(2, 7).map((item: any) => {
                return item.name;
            });
            return genresArray;
        }

        return (
            <div className="main">
                <div className={adminPanel ? "" : "disabled"}>
                    <AdminModal toggleModal={() => {setAdminPanel(!adminPanel)}}/>
                </div>
                <div className="navbar">
                    <NavBar></NavBar>
                </div>
                <div className="main_headerWrapper">
                    <SettingsGear></SettingsGear>
                    <ProfilePicture imgSize="45px"/>
                </div>
                <div className="headerInfo">
                    <span>Welcome, {usernameInput}</span>
                    {adminViewRender(isAdmin)}
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