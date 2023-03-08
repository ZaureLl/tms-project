import React from "react";

import styles from "./Success.module.scss";
import Title from "../../Title";
import Button, { ButtonType } from "../../Button";

const Success = () => {
    return (
        <div className={styles.pageContanier}>
            <div className={styles.formWrapper}>
                <div>Back to home</div>
                <Title titleText="Success" />
                <div className={styles.formInput}>
                    <div className={styles.forgot}>Email confirmed.<br />
                        Your registration is now completed</div>
                    <Button title="Go to home" type={ButtonType.Primary} onClick={() => { }} className={"w-100 " + styles.btn} />
                </div>
            </div>
        </div>
    )
};

export default Success;