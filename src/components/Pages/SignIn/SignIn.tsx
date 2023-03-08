import React from "react";

import styles from "./SignIn.module.scss";
import Title from "../../Title";
import Input from "../../Input";
import Button, { ButtonType } from "../../Button";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Routers";

const SignIn = () => {

    const navigate = useNavigate();
    const onSignInLinkClick = () => {
        navigate(RoutesList.Success)
    }

    return (
        <div className={styles.pageContanier}>
            <div className={styles.formWrapper}>
                <div onClick={() => { navigate(RoutesList.Home) }} className={styles.back} >Back to home</div>
                <Title titleText="Sign In" />
                <div className={styles.formInput}>
                    <Input title="Email" placeholder="Your email" type="email" className={"w-100 " + styles.email} />
                    <Input title="Password" placeholder="Your password" type="password" className="w-100" />
                    <div className={styles.forgot}>Forgot password?</div>
                    <Button title="Sign In" type={ButtonType.Primary} onClick={onSignInLinkClick} className="w-100" />
                    <div className={styles.bottomText}>Don’t have an account? <a href="#" onClick={() => { navigate(RoutesList.SignUp) }}>Sign Up</a></div>
                </div>
            </div>
        </div>
    )
};

export default SignIn;