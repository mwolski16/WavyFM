
import "./login.scss";
import { useState } from "react";
import Button from "../generic/Button";
import Input from "../generic/Input";
import PocketBase from 'pocketbase';
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    

    const navigate = useNavigate();
    async function handleSubmit(e: any) {
        e.preventDefault();
        const pb = new PocketBase('http://127.0.0.1:8090');


        try {
           const authData = await pb.admins.authWithPassword('spammailfanceehh@gmail.com', 'sraczka123');
           console.log("Authentication successful! -> ", authData, pb.authStore.model);
           navigate('/', {replace: true, state: { isAdminLoggedIn: true }});

        } catch (error) {

              console.log("Authentication failed! -> ", error);
        }

        //console.log(e);

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