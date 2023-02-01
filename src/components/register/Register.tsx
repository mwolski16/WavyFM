import React, { useState, useContext } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Input from '../generic/Input';
import "./register.scss";
import "../login/login.scss";
import Button from "../generic/Button";
import { addDoc, collection } from "@firebase/firestore"
import { v4 as uuid } from 'uuid';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail} from "firebase/auth";
import {app, firestore} from "../firebase/firebase_config";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import Alert from "../generic/Alert";

const auth = getAuth(app);
interface userData {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
}

export default function Register() {
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [alertText, setAlertText] = useState('');
  const [alertText2, setAlertText2] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e:any, username: string, email: string, password: string, isAdmin: boolean) {
        e.preventDefault();
        const ref = collection(firestore, "users_details")

        let data = {
            id: uuid().slice(0, 8),
            username: username,
            email: email,
            password: password,
            isAdmin: 0
        }

        try {
            const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(email);
            if (signInMethods.length === 0) {
                if (password === confirmPasswordInput) {
                    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
                    addDoc(ref, data)
                    navigate('/main', {replace: true});
                } else {
                    setAlertText("Passwords are not matching!");
                }
            } else {
                setAlertText("E-mail already in use!");
            }
        } catch(err) {
            setAlertText('Wrong data provided!');
            setAlertText2('Check e-mail and password.');
            console.log(err)
        }
    }

  return (
      <div className="main">
        <div className='register_div'>
            <h1>REGISTER</h1>
            <div className="register_content">
                <form className="register_inputs" onSubmit={(e) => {handleSubmit(e, usernameInput, emailInput, passwordInput, false)}}>
                    <Input
                        cssClasses={['register_input']}
                        placeHolderText='username'
                        onChangeFunction={(e) => {setUsernameInput(e.target.value)}}
                    ></Input>
                    <Input
                        cssClasses={['register_input']}
                        placeHolderText='email address'
                        onChangeFunction={(e) => {setEmailInput(e.target.value)}}
                    ></Input>
                    <Input
                        cssClasses={['register_input']}
                        placeHolderText='password'
                        type='password'
                        onChangeFunction={(e) => {setPasswordInput(e.target.value)}}
                    ></Input>
                    <Input
                        cssClasses={['register_input']}
                        placeHolderText='confirm password'
                        type='password'
                        onChangeFunction={(e) => {setConfirmPasswordInput(e.target.value)}}
                    ></Input>
                    <Button
                        cssClasses={["welcomeScreenBtn bigBtn signUpBtn"]}
                        text='Sign up'
                        type="submit"
                        onClick={(e) => {return;}}/>
                </form>
                <div>
                    <div className='register_blur'>
                        <div className='register_backgroundImage'></div>
                    </div>
                </div>
            </div>
            <Alert text={alertText} cssClasses={["alert"]}/>
            <Alert text={alertText2} cssClasses={["alert"]}/>
            <div className="register_bottomWrapper">
                <span className="register_bottomNote">Already have an account?</span>
                <Button
                    cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                    text='Sign in'
                    type="button"
                    onClick={() => {{ navigate('/login', {replace: true})}}}/>
            </div>
        </div>
    </div>
);
  }