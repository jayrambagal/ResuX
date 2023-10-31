"use client";
import { LoginLandingImage } from "@/DB/assets";
import classes from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Login = () => {
    return (
        <div className={classes.authContainer}>
            <div className={classes.authleftContainer}>
                <div className={classes.logRegContainer}>
                    <div className={classes.authHeadingCon}>
                        <h1> Login</h1>
                        <p>Enter your account details</p>
                    </div>
                    <div className={classes.authInputsCon}>
                        <input
                            className={classes.userNameInput}
                            type="text"
                            placeholder="Username"
                        />
                        <span className={classes.passwordCon}>
                            <input
                                className={classes.userNameInput}
                                type="password"
                                placeholder="Password"
                            />
                        </span>

                        <Link href={"/auth/register"} className={classes.forgetTag}>
                            Forgot password ?
                        </Link>
                    </div>

                    <button className={classes.authBtn}>Login</button>
                </div>

                <div className={classes.authSignUpCon}>
                    <Link href={'/auth/register'} className={classes.accountTag}>
                        Don’t have an account?{" "}
                        <span className={classes.loginBtn}>Register</span>
                    </Link>
                    {/* <button className={classes.authSignUpBtn}>Register</button> */}
                </div>
            </div>

            <div className={classes.authrightContainer}>
                <div className={classes.rightHeadingCon}>
                    <h1> Welcome To ResuX </h1>
                    <p>Login to access your account</p>
                </div>

                <Image
                    className={classes.homeLandingImage}
                    src={LoginLandingImage}
                    alt="login-landing"
                />
            </div>
        </div>
    );
};

export default Login;
