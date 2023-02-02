import "./welcome.scss";
import React, { useState } from "react";
import Button from "../generic/Button";
import { useNavigate } from "react-router-dom";
import {getAuth} from "firebase/auth";
import {app, firestore} from "../firebase/firebase_config";

const auth = getAuth(app);

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className='welcome_div'>
                <div className="topWrapper">
                    <img src="public/img/logo.png" />
                    <h1>WavyFM</h1>
                </div>
                <div className="buttosnWrapper">
                    <Button
                        cssClasses={["welcomeScreenBtn bigBtn signInBtn"]}
                        text='Sign in'
                        type="button"
                        onClick={() => {{ navigate('/login', {replace: true})}}}/>
                    <Button
                        cssClasses={["welcomeScreenBtn bigBtn signUpBtn"]}
                        text='Sign up'
                        type="button"
                        onClick={() => {{ navigate('/register', {replace: true})}}}/>
                </div>
                <div>
                    <div className='login_blur'>
                        <div className='login_backgroundImage'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}