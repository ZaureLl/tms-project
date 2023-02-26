import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from "./components/Button"
import { ButtonType } from './components/Button/Button';
import UserMenu from './components/UserMenu';
import Calc from './components/calc';
import Card from './components/Card';
import { CardSize } from './components/Card/types';
import styles from "./App.module.scss";
import Input from './components/Input/Input';
import BurgerMenu from './components/BurgerMenu';


const MOCK_CARD = {
  id: 0,
  image: "https://www.codelco.com/prontus_codelco/site/artic/20230113/imag/foto_0000000120230113104925/Banner_mobile.png",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.Lorem Ipsum",
  date: "12-10-2023",
  lesson_num: 12,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  description: "description",
  author: 10,
};

const App = () => {
  return (
    <div className="App">
      <div>
        <BurgerMenu />

      </div>
      <div>
        <Input title={"text"} placeholder={"ss"} />
        <Input title={"text"} placeholder={"ss"} disabled={true} />
        <Input title={"text"} placeholder={"ss"} errorText={true} />
      </div>
      <div className="padding"></div>
      <div className='UserMenu'>
        <UserMenu username="Daria Shpak" />
      </div>
      <div className='Title'>
        <Title titleText="Blog" />
      </div>
      <div className='Buttons'>
        <Button title={"Primary"} type={ButtonType.Primary} onClick={() => { }} />
        <Button title={"Secondary"} type={ButtonType.Secondary} onClick={() => { }} />
        <Button title={"Error"} type={ButtonType.Error} onClick={() => { }} />
      </div>
      <div className={styles.contanier}>
        <Card card={MOCK_CARD} size={CardSize.Large} />
        <Card card={MOCK_CARD} size={CardSize.Medium} />
        <Card card={MOCK_CARD} size={CardSize.Small} />
      </div>
      <div>
        <Calc />
      </div>
    </div>
  );
}

export default App;
