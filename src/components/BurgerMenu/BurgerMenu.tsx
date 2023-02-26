import React, { FC, useState } from "react";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { BurgerMenuIcon } from "../../assets/icons/BurgerMenuIcon";

const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onMenuBtnClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div onClick={onMenuBtnClick} className={styles.menu}>
            {isOpen ? (
                <CloseIcon />
            ) : (
                <BurgerMenuIcon />
            )}
        </div>
    );



    // if (isOpen) {
    //     return <CloseIcon />
    // } else {
    //     return <BurgerMenuIcon />
    // }


};
export default BurgerMenu;