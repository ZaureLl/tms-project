import React, { useEffect, useState } from "react";

import Title from "../../Title";
import Input from "../../Input";
import CardsList from "../../CardsList";
import Card from "../../Card";
import { CardType } from "../../Card";
import Tabs from "../../Tabs";
import Modal from "../../Modal";
import { useDispatch, useSelector } from "react-redux";
import { SavedPostSelectors } from "../redux/reducers/savedPostSlice";
import { savePost } from "../redux/reducers/savedPostSlice";

const MOCK_ARRAY = [
    {
        id: 0,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 1,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 2,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 3,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 4,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 5,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 6,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 7,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 8,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 9,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 10,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 11,
        image:
            "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
];


const Home = () => {
    const [cardsList, setCardsList] = useState<CardType[]>([]);

    useEffect(() => {
        setCardsList(MOCK_ARRAY);
    }, [MOCK_ARRAY]);

    const isModalVisible = useSelector(SavedPostSelectors.getVisibleSelectedModal)
    const savedPost = useSelector(SavedPostSelectors.getSelectedPost)
    const showModal = savedPost && isModalVisible;
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(savePost(null));
    }

    return (
        <div>
            <Title titleText={"Blog"} />
            <Tabs />
            <CardsList cardsList={cardsList} />
            {showModal ? (
                <Modal post={savedPost} onClose={onClose} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Home;