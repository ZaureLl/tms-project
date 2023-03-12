import React, { FC } from "react";
import Card from "../Card";
import styles from "./Modal.module.scss";
import { CloseIcon } from "../../assets/icons";
import { CardType, CardSize } from "../Card/types";

// const savedPost = {
//     id: 0,
//     image:
//         "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "12-10-2023",
//     lesson_num: 12,
//     title:
//         "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     description: "Описание поста",
//     author: 10,
// };

type ModalProps = {
    post: CardType;
    onClose: () => void;
};



const Modal: FC<ModalProps> = ({ post, onClose }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={styles.iconsWrapper}>
                    <div className={styles.iconContainer} onClick={onClose}>
                        <CloseIcon fill="#14141F" width="20" height="20" />
                    </div>
                </div>
                <Card card={post} size={CardSize.Large} />
            </div>
        </div>
    )
};

export default Modal;