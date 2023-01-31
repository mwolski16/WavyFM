import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../generic/Input';
import PocketBase from 'pocketbase';
import "./reset.scss";
import "../login/login.scss";
import Button from "../generic/Button";

interface userData {
    email: string;
}

export default function Reset() {
    const [emailInput, setEmailInput] = useState('');

    const navigate = useNavigate();
    async function handleSubmit(e: any) {
        e.preventDefault();
        const pb = new PocketBase('http://127.0.0.1:8090');
        const data: { email: string } = {
            email: emailInput
        }

    }

    return (
            <div className='reset_div'>
                <h1>Reset password</h1>
                <div className="reset_content">
                    <form className="reset_inputs" onSubmit={(e) => {handleSubmit(e)}}>
                        <h2>Enter your email address:</h2>
                        <Input
                            cssClasses={['reset_input']}
                            placeHolderText='email address'
                            onChangeFunction={(e) => {setEmailInput(e.target.value)}}
                        ></Input>
                        <Button
                            cssClasses={["welcomeScreenBtn bigBtn resetBtn"]}
                            value='reset'
                            onClick={() => {return;}}/>
                    </form>
                    <div>
                        <div className='register_blur'>
                            <div className='register_backgroundImage'></div>
                        </div>
                    </div>
                </div>
                <div className="reset_bottomWrapper">
                    <span className="register_bottomNote">Already have an account?</span>
                    <Button
                        cssClasses={["welcomeScreenBtn smallBtn signInBtn"]}
                        value='Sign in'
                        onClick={(e) => {return;}}/>
                </div>
            </div>
    );
}