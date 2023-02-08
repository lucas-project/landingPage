import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import {signInWithPopup } from 'firebase/auth';
import Profile from '../../pages/Profile';

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick = () => {
        signInWithPopup (auth, provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            {value?<Profile />:<button onClick={handleClick}> Sign in with Google</button>}
        </div>
    )
}

export default SignIn