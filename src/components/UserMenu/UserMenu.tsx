import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./UserMenu.module.scss";

type UserMenuProps = {
    username: string;
}

const UserMenu: FC<UserMenuProps> = ({ username }) => {
    const namesArray = username.split(' ');
    const initials = namesArray[0][0] + namesArray[1][0];

    return (
        <div className={styles.userMenuWrapper}>
            <div className={styles.userMenuInner}>
                <div className={styles.initials}>{initials}</div>
                <div className={styles.fullName}>{username}</div>
            </div>
        </div>
    );
};

export default UserMenu