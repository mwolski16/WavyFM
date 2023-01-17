'use client';

import "./login.scss";
import { useState } from "react";



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
            <div className='login_blur'>
                <img className='login_backgroundImage'></img>
            </div>
        </div>
    );
}