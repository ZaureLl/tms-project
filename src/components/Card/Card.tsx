import React, { FC } from "react";
import { CardProps, CardSize } from "./types";
import styles from "./Card.module.scss";
import { BookmarkIcon, DislikeIkon, LikeIkon, MoreIcon } from "../../assets/icons";
import classNames from "classnames";


const Card: FC<CardProps> = ({ card, size }) => {
    const { title, text, date, image } = card;

    const isMedium = size === CardSize.Medium;
    const isSmall = size === CardSize.Small;

    return (
        <div
            className={classNames(styles.container, {
                [styles.mediumContainer]: isMedium,
                [styles.smallContainer]: isSmall,
            })}
        >
            <div
                className={classNames(styles.infoContainer, {
                    [styles.mediumInfoContainer]: isMedium,
                    [styles.smallInfoContainer]: isSmall,
                })}
            >
                <div className={styles.mainInfoContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.date}>{date}</div>
                        <div
                            className={classNames(styles.title, {
                                [styles.mediumTitle]: isMedium || isSmall,
                            })}
                        >
                            {title}
                        </div>
                    </div>
                    {size === CardSize.Large && <div className={styles.text}>{text}</div>}
                </div>
                <img
                    src={image}
                    className={classNames(styles.image, {
                        [styles.mediumImage]: isMedium,
                        [styles.smallImage]: isSmall,
                    })}
                />
            </div>
            <div className={styles.footer}>
                <div className={styles.iconContainer}>
                    <div>
                        <LikeIkon />
                    </div>
                    <div>
                        <DislikeIkon />
                    </div>
                </div>
                <div className={styles.iconContainer}>
                    <div>
                        <BookmarkIcon />
                    </div>
                    <div>
                        <MoreIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;