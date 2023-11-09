import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,orginals,adventure,comedy,fantasy,romance,horror,documentary,western} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action" isSmall={true}/>
      <RowPost url={comedy} title="Comedy" isSmall={true}/>
      <RowPost url={horror} title="Horror" isSmall={true}/>
      <RowPost url={adventure} title="Adventure" isSmall={true}/>
      <RowPost url={romance} title="Romance" isSmall={true}/>
      <RowPost url={documentary} title="Documentary" isSmall={true}/>
      <RowPost url={fantasy} title="Fantasy" isSmall={true}/>
      <RowPost url={western} title="Western" isSmall={true}/>

    </div>
  );
}

export default App;
