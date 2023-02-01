import Button from "../../generic/Button";
import ButtonWithImage from "../../generic/ButtonWithImage";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ButtonList() {

    return (
        <div className="main">
            <Button
                cssClasses={["welcomeScreenBtn bigBtn signInBtn"]}
                text='Sign in'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn signUpBtn"]}
                text='Sign up'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn loginBtn"]}
                text='Login'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn bigBtn resetBtn"]}
                text='reset'
                type="button"
                onClick={() => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn smallBtn signUpBtn"]}
                text='Sign up'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                text='Sign in'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                text='Reset password'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                text='Change e-mail'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn settingsBtn"]}
                text='Change username'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn logoutBtn"]}
                text='Log out'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn disableAccountBtn"]}
                text='Disable account'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn confirmBtn"]}
                text='Confirm'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn confirmBtn disabledBtn"]}
                text='Confirm'
                type="button"
                onClick={(e) => {return;}}/>

            <Button
                cssClasses={["settingsScreenBtn mediumBtn cancelBtn"]}
                text='Cancel'
                type="button"
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