
import "./login.scss";
import React, { useState } from "react";
import Button from "../generic/Button";
import Input from "../generic/Input";
import PocketBase from 'pocketbase';
import { useNavigate } from "react-router-dom";

interface loginData {
    email: string;
    password: string;
  }

export default function Login() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    

    const navigate = useNavigate();
    async function handleSubmit(e: any) {
        e.preventDefault();
        const pb = new PocketBase('http://127.0.0.1:8090');


        try {
           //const authData = await pb.admins.authWithPassword('spammailfanceehh@gmail.com', 'sraczka123');
           const loginData : loginData = {
                email: usernameInput,
                password: passwordInput,
            }
            const authData = await pb.collection('users').authWithPassword(loginData.email, loginData.password);
           //console.log("Authentication successful! -> ", authData, pb.authStore.model);
           navigate('/', {replace: true, state: { isAdminLoggedIn: false }});

        } catch (error) {

              console.log("Authentication failed! -> ", error);
        }

        //console.log(e);

    }

    return (
        <div className='login_div'>
            <h1>LOGIN</h1>
            <div className="login_content">
                <form className="login_inputs" onSubmit={(e) => {handleSubmit(e)}}>
                    <Input
                        cssClasses={['login_input']}
                        placeHolderText='username'
                        onChangeFunction={(e) => {setUsernameInput(e.target.value)}}
                    ></Input>
                    <Input cssClasses={['login_input']}
                        placeHolderText='password'
                        onChangeFunction={(e) => {setPasswordInput(e.target.value)}}
                    ></Input>
                    <Button
                        cssClasses={["welcomeScreenBtn bigBtn loginBtn"]}
                        value='Login'
                        onClick={(e) => {return;}}/>
                </form>
                <div>  
                    <div className='login_blur'>
                        <div className='login_backgroundImage'></div>
                    </div>
                </div>
            </div>
            <a role="button">Forgot password?</a>
            <div className="login_bottomWrapper">
                <span className="login_bottomNote">Already have an account?</span>
                <Button
                    cssClasses={["welcomeScreenBtn smallBtn signUpBtn"]}
                    value='Sign up'
                    onClick={(e) => {return;}}/>
            </div>
        </div>
    );
}