"use client"
import { LoginLandingImage } from '@/DB/assets'
import classes from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Login = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (

        <div className={classes.authContainer}>
            <div className={classes.authleftContainer}>
                <div className={classes.logRegContainer} >
                    <div className={classes.authHeadingCon}>
                        <h1>{isRegister ? 'Register' : 'Login'}</h1>
                        <p>{isRegister ? 'Create your account' : 'Enter your account details'}</p>
                    </div>
                    <div className={classes.authInputsCon}>
                        <input className={classes.userNameInput} type='text' placeholder='Username' />
                        <span className={classes.passwordCon}>
                            <input className={classes.userNameInput} type='password' placeholder='Password' />
                        </span>

                        <p className={classes.forgetTag} >Forgot password ?</p>
                    </div>

                    <button onClick={() => setIsRegister(!isRegister)} className={classes.authBtn} >
                        {isRegister ? 'SignUp' : 'SignIn'}
                    </button>
                </div>

                <div className={classes.authSignUpCon} >
                    <p onClick={() => setIsRegister(!isRegister)} className={classes.forgetTag} >{isRegister ? 'Already have and accout' : 'Don’t have an account ?'}</p>
                    <button onClick={() => setIsRegister(!isRegister)} className={classes.authSignUpBtn} >{isRegister ? 'Login' : 'Sign up'}</button>
                </div>
            </div>

            <div className={classes.authrightContainer}>
                <div className={classes.rightHeadingCon}>
                    <h1 > Welcome To ResuX </h1>
                    <p>{isRegister ? 'Register you details' : 'Login to access your account'}</p>
                </div>

                <Image className={classes.homeLandingImage} src={LoginLandingImage} alt='login-landing' />
            </div>
        </div>

    )
}

export default Login