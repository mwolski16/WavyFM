import "./login.scss";
import React, { useState } from "react";
import Button from "../generic/Button";
import Input from "../generic/Input";
import { useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app, firestore} from "../firebase/firebase_config";
import firebase from "firebase/compat/app";
import Alert from "../generic/Alert";
const auth = getAuth(app);

interface loginData {
    email: string;
    password: string;
  }


export default function Login() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [alertText, setAlertText] = useState('');


    const navigate = useNavigate();
    async function handleSubmit(e: any, email: string, password: string) {
        e.preventDefault();
        let signInMethods =[];
        try {
            signInMethods = await firebase.auth().fetchSignInMethodsForEmail(email);
        } catch (err) {
            setAlertText("User not found!");
            console.error(err)
        }

        if (signInMethods.length !== 0) {
            try {
                let user = await signInWithEmailAndPassword(auth, email, password);
                console.log(user);
                navigate('/main', {replace: true});
            } catch (error) {
                setAlertText("Credentials are incorrect!");
                console.log("Authentication failed! -> ", error);
            }
        }
    }

    return (
        <div className="main">
            <div className='login_div'>
                <h1>LOGIN</h1>
                <div className="login_content">
                    <form className="login_inputs" onSubmit={(e) => {handleSubmit(e, usernameInput, passwordInput)}}>
                        <Input
                            cssClasses={['login_input']}
                            placeHolderText='e-mail'
                            onChangeFunction={(e) => {setUsernameInput(e.target.value)}}
                        ></Input>
                        <Input cssClasses={['login_input']}
                            placeHolderText='password'
                            type='password'
                            onChangeFunction={(e) => {setPasswordInput(e.target.value)}}
                        ></Input>
                        <Button
                            cssClasses={["welcomeScreenBtn bigBtn loginBtn"]}
                            text='Login'
                            type="submit"
                            onClick={(e) => {return;}} />
                    </form>
                    <div>
                        <div className='login_blur'>
                            <div className='login_backgroundImage'></div>
                        </div>
                    </div>
                </div>
                <a role="submit" onClick={() => {{ navigate('/reset', {replace: true})}}}>Forgot password?</a>
                <Alert text={alertText} cssClasses={["alert"]}/>
                <div className="login_bottomWrapper">
                    <span className="login_bottomNote">Already have an account?</span>
                    <Button
                        cssClasses={["welcomeScreenBtn smallBtn signUpBtn"]}
                        text='Sign up'
                        type="button"
                        onClick={() => {{ navigate('/register', {replace: true})}}}/>
                </div>
            </div>
        </div>
    );
}