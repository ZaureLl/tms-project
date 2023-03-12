import React from "react";
import Button, { ButtonType } from "../../Button";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Routers";
import styles from "./Error.module.scss";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.contanier}>
            <div className={styles.nameOfError}>404</div>
            <div className={styles.text}>Page not found</div>
            <Button title="Go home" type={ButtonType.Primary} onClick={() => { navigate(RoutesList.Home) }} className={styles.btn + " w-100"} />
        </div>
    )
};
export default Error;