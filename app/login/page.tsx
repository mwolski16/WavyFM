'use client';

import "./login.scss";
import { useState } from "react";
import Button from "@/generic/Button";
import Input from "@/generic/Input";



export default function LoginPage() {

    const [isLoginVisible, setIsLoginVisible] = useState(true);

    return (
            <Login></Login>
    );
}

function Login() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className='login_div'>
            <div className="login_content">
                <form className="login_inputs" onSubmit={(e) => {handleSubmit(e)}}>
                    <Input
                        cssClasses={['login_input']}
                        placeHolderText='Username'
                    ></Input>
                    <Input cssClasses={['login_input']}
                        placeHolderText='Password'
                    ></Input>
                    <button type='submit'>Submit</button>
                </form>
                <div>  
                    <div className='login_blur'>
                        <div className='login_backgroundImage'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}