import classNames from "classnames";
import React, { FC } from "react";

import styles from "./Input.module.scss";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ title, placeholder, disabled, errorText }) => {
    return (
        <div className={styles.contanier}>
            <p>{title}</p>
            <input placeholder={placeholder} disabled={disabled} className={classNames(styles.input, {
                [styles.disableInput]: disabled,
                [styles.errorInput]: errorText,
            })}>
            </input>
        </div>
    )
};

export default Input;

