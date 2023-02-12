import React, { FC } from "react";

import styles from "./Title.module.scss";

type TitleProps = {
    titleText: string;
}

const Title: FC<TitleProps> = ({ titleText }) => {
    return (
        <h1 className={styles.h1}>
            {titleText}
        </h1>
    )
};

export default Title;