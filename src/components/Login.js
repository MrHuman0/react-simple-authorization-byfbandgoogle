import React from "react";
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import 'firebase/app';

import {signInWithGoogle, signInWithFacebook} from "./firebase";

const Login = () => {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to chat</h2>
                <div
                    className='login-button google'
                    onClick={signInWithGoogle}
                >
                    <GoogleOutlined/> Sign In With Google
                </div>
                <br/> <br/>
                <div
                    className='login-button facebook'
                    onClick={signInWithFacebook}
                >
                    <FacebookOutlined/> Sign In With Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;