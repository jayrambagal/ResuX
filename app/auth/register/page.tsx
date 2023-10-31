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
                        <h1> Register </h1>
                        <p>Register for ResuX</p>
                    </div>
                    <div className={classes.authInputsCon}>
                        <input
                            className={classes.userNameInput}
                            type="email"
                            placeholder="Email"
                        />
                        <span className={classes.passwordCon}>
                            <input
                                className={classes.userNameInput}
                                type="password"
                                placeholder="Password"
                            />
                        </span>

                        <Link href={"/auth/login"} className={classes.accountTag}>
                            {" "}
                            Already have an ResuX account ?{" "}
                            <span className={classes.loginBtn}>Log In</span>
                        </Link>
                    </div>

                    <button className={classes.authBtn}>Register using your email</button>
                </div>
            </div>

            <div className={classes.authrightContainer}>
                <div className={classes.rightHeadingCon}>
                    <h1> Welcome To ResuX </h1>
                    <p>Register you details</p>
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
