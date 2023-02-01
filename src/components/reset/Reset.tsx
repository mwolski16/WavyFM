import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../generic/Input';
import PocketBase from 'pocketbase';
import "./reset.scss";
import "../login/login.scss";
import Button from "../generic/Button";
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {addDoc, getFirestore} from "@firebase/firestore";
import {app, firestore} from "../firebase/firebase_config"
import Alert from "../generic/Alert";
import firebase from "firebase/compat";


const auth = getAuth(app);
interface userData {
    email: string;
}

export default function Reset() {
    const [emailInput, setEmailInput] = useState('');
    const [alertText, setAlertText] = useState('');

    const navigate = useNavigate();
    async function handleSubmit(e: any, email: string) {
        e.preventDefault();
        try {
            const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(email);
            if (signInMethods.length !== 0) {
                await sendPasswordResetEmail(auth, email);
                setAlertText("Email sent. Check your inbox.")
            } else {
                setAlertText("No account found with given e-mail!");
            }
        } catch(err) {
            setAlertText("No account found with given e-mail!");
            console.log(err)
        }
    }

    return (
        <div className="main">
            <div className='reset_div'>
                <h1>Reset password</h1>
                <div className="reset_content">
                    <form className="reset_inputs" onSubmit={(e) => {handleSubmit(e, emailInput)}}>
                        <h2>Enter your email address:</h2>
                        <Input
                            cssClasses={['reset_input']}
                            placeHolderText='email address'
                            onChangeFunction={(e) => {setEmailInput(e.target.value)}}
                        ></Input>
                        <Button
                            cssClasses={["welcomeScreenBtn bigBtn resetBtn"]}
                            text='reset'
                            type='submit'
                            onClick={() => {return;}}/>
                    </form>
                    <div>
                        <div className='register_blur'>
                            <div className='register_backgroundImage'></div>
                        </div>
                    </div>
                </div>
                <Alert text={alertText} cssClasses={["alert"]}/>
                <div className="reset_bottomWrapper">
                    <span className="register_bottomNote">Already have an account?</span>
                    <Button
                        cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                        text='Sign in'
                        type='button'
                        onClick={() => {{ navigate('/login', {replace: true})}}}/>
                </div>
            </div>
        </div>
    );
}