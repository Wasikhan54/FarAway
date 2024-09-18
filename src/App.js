import { useState } from 'react';
import './App.css';
import Hero from './Hero/index.js';
import Logo from './Logo/index.js';
import Packinglist from './Packinglist/index.js';
import Stats from './Stats/index.js';

function App() {
  const [itemList, setItemList] = useState([])
  return (
    <div>
      <Logo />
      <Hero itemList={itemList} setItemList={setItemList} />
      <Packinglist    itemList={itemList}  setItemList={setItemList} />
      <Stats itemList={itemList} />
    </div>
  );
}

export default App;
