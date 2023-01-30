import Button from "../../generic/Button";
import ButtonWithImage from "../../generic/ButtonWithImage";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ButtonList() {

    return (
        <div className="main">
            <Button
                cssClasses={["welcomeScreenBtn bigBtn signInBtn"]}
                value='Sign in'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn signUpBtn"]}
                value='Sign up'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn loginBtn"]}
                value='Login'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn resetBtn"]}
                value='reset'
                onClick={() => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn smallBtn signUpBtn"]}
                value='Sign up'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                value='Sign in'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                value='Reset password'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                value='Change e-mail'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                value='Change username'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn logoutBtn"]}
                value='Log out'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn disableAccountBtn"]}
                value='Disable account'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]}
                value='Confirm'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn confirmBtn disabledBtn"]}
                value='Confirm'
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]}
                value='Cancel'
                onClick={(e) => {return;}}/>

            <ButtonWithImage
                cssClasses={["songScreenBtn mediumBtn spotifyBtn"]}
                value='Spotify'
                onClick={(e) => {return;}}
                svgName='spotify.svg'
            />

            <ButtonWithImage
                cssClasses={["songScreenBtn mediumBtn appleBtn"]}
                value='iTunes'
                onClick={(e) => {return;}}
                svgName='apple.svg'
            />

            <ButtonWithImage
                cssClasses={["songScreenBtn mediumBtn lyricsBtn"]}
                value='Show lyrics'
                onClick={(e) => {return;}}
                svgName='genius.svg'
            />
        </div>
    );
}