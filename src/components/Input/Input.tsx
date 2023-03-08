import classNames from "classnames";
import React, { FC } from "react";

import styles from "./Input.module.scss";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ title, placeholder, disabled, errorText, type, className }) => {
    return (
        <div className={styles.contanier}>
            <p>{title}</p>
            <input placeholder={placeholder} disabled={disabled} type={type} className={classNames(styles.input, className, {
                [styles.disableInput]: disabled,
                [styles.errorInput]: errorText,
            })}>
            </input>
        </div>
    )
};

export default Input;

