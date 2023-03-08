import React from "react";
import styles from "./SignUp.module.scss";
import Title from "../../Title";
import Input from "../../Input";
import Button, { ButtonType } from "../../Button";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Routers";

const SignUp = () => {

    const navigate = useNavigate();
    const onSignInLinkClick = () => {
        navigate(RoutesList.Success)
    }
    return (
        <div className={styles.pageContanier}>
            <div className={styles.formWrapper}>
                <div onClick={() => { navigate(RoutesList.Home) }} className={styles.back} >Back to home</div>
                <Title titleText="Sign Up" />
                <div className={styles.formInput}>
                    <Input title="Name" placeholder="Your name" type="text" className={"w-100 "} />
                    <Input title="Email" placeholder="Your email" type="email" className="w-100" />
                    <Input title="Password" placeholder="Your password" type="password" className={"w-100 "} />
                    <Input title="Confirm password" placeholder="Confirm password" type="password" className={"w-100 " + styles.bottomBTn} />
                    <Button title="Sign Up" type={ButtonType.Primary} onClick={onSignInLinkClick} className="w-100" />
                    <div className={styles.bottomText}>Already have an account? <a href="#" onClick={() => { navigate(RoutesList.SignIn) }}> Sign In</a></div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;