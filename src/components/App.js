import '../styles/App.css';
import Height from './Height';
import Header from './Header';
import PokeList from './PokéList';
import { useState } from 'react';

function App() {
  const [ active, setActive ] = useState({});
  const [ heightMax, setHeight ] = useState(1.6);

  return (
    <div className="App">
      <Header />
      <Height active={active} heightMax={heightMax} />
      <PokeList active={active} setActive={setActive} heightMax={heightMax} setHeight={setHeight} />
    </div>
  );
}

export default App;
