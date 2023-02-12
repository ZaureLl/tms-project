import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from "./components/Button"
import { ButtonType } from './components/Button/Button';
import UserMenu from './components/UserMenu';

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
