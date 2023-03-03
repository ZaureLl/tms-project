import React, { FC } from "react";

import { BookmarkIcon, DislikeIkon, LikeIkon } from "../../../assets/icons";
import Button, { ButtonType } from "../../Button";
import Title from "../../Title";
import styles from "./Content.module.scss";
import { ContentProps } from "./types";



const Content: FC<ContentProps> = ({ title, img, text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumbs}>
                <div>Home</div>
                <div>Post 14278</div>
            </div>
            <Title titleText={title} />
            <div className={styles.imgWrapper}>
                <img src={img} className={styles.image} />
            </div>
            <div className={styles.textBtnWrapper}>
                <div className={styles.textWrapper}>{text}</div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.likesWrapper}>
                        <Button title={<LikeIkon />} type={ButtonType.Secondary} onClick={() => { }} />
                        <Button title={<DislikeIkon />} type={ButtonType.Secondary} onClick={() => { }} />
                    </div>
                    <Button title={<div className={styles.BookmarkIcon}><BookmarkIcon /><span>Add to favorites</span></div>} type={ButtonType.Secondary} onClick={() => { }} />
                </div>
            </div>
        </div>
    );
};

export default Content;