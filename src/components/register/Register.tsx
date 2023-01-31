import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../generic/Input';
import PocketBase from 'pocketbase';
import "./register.scss";
import "../login/login.scss";
import Button from "../generic/Button";

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

    const navigate = useNavigate();
    async function handleSubmit(e: any) {
        e.preventDefault();
        const pb = new PocketBase('http://127.0.0.1:8090');
        const data: userData = {
          username: usernameInput,
          email: emailInput,
          emailVisibility: true,
          password: passwordInput,
          passwordConfirm: confirmPasswordInput,
        }
        const record = await pb.collection('users').create(data);
        console.log(record);
       
    }

  return (
    <div className='register_div'>
        <h1>REGISTER</h1>
        <div className="register_content">
            <form className="register_inputs" onSubmit={(e) => {handleSubmit(e)}}>
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
                    onChangeFunction={(e) => {setPasswordInput(e.target.value)}}
                ></Input>
                <Input
                    cssClasses={['register_input']}
                    placeHolderText='confirm password'
                    onChangeFunction={(e) => {setConfirmPasswordInput(e.target.value)}}
                ></Input>
                <Button
                    cssClasses={["welcomeScreenBtn bigBtn signUpBtn"]}
                    value='Sign up'
                    onClick={(e) => {return;}}/>
            </form>
            <div>  
                <div className='register_blur'>
                    <div className='register_backgroundImage'></div>
                </div>
            </div>
        </div>
        <div className="register_bottomWrapper">
            <span className="register_bottomNote">Already have an account?</span>
            <Button
                cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                value='Sign in'
                onClick={(e) => {return;}}/>
        </div>
    </div>
);
  }