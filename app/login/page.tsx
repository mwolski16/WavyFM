'use client';

import "./login.scss";
import { useState } from "react";
import Button from "@/generic/Button";
import Input from "@/generic/Input";



export default function LoginPage() {

    const [isLoginVisible, setIsLoginVisible] = useState(true);

    return (
        <div>
            <Login></Login>
        </div>
    );
}

function Login() {
    return (
        <div className='login_div'>
            <div className="login_content">
                <div className="login_inputs">
                    <Input></Input>
                    <Input></Input>
                </div>
                <div>  
                    <div className='login_blur'>
                        <img className='login_backgroundImage'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}