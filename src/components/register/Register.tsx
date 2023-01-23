import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../generic/Input';
import PocketBase from 'pocketbase';
import "./register.scss";

interface userData {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
    
    const navigate = useNavigate();
    async function handleSubmit(e: any) {
        e.preventDefault();
        const pb = new PocketBase('http://127.0.0.1:8090');


      
    }

  return (
    <div className='register_div'>
        <div className="register_content">
            <form className="register_inputs" onSubmit={(e) => {handleSubmit(e)}}>
                <Input
                    cssClasses={['register_input']}
                    placeHolderText='Username'
                ></Input>
                <Input 
                    cssClasses={['register_input']}
                    placeHolderText='Password'
                ></Input>
                <button type='submit'>Submit</button>
            </form>
            <div>  
                <div className='register_blur'>
                    <div className='register_backgroundImage'></div>
                </div>
            </div>
        </div>
    </div>
);
  }