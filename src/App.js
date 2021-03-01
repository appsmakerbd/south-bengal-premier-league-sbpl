
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import playerData from './Data/data.json';
import Players from './components/Players/Players';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';


function App() {
  //Fake data parse
  const [players,setPlayers]=useState([]);
  useEffect(()=>{
    setPlayers(playerData);
  },[])

  //Add Player Function
  const [filterPlayer,setFilterPlayer]=useState([]);
  const addPlayer=(clickedPlayer)=>{
    const adding=[...filterPlayer,clickedPlayer];
    setFilterPlayer(adding);
  }
  console.log(filterPlayer);



  return (
    

      <section className="main-container container">
        <h1 className="text-center text-primary"><span>SBPL</span> South Bengal Premier League </h1>
        <h5 className="text-center">Player Selection</h5>
     
        <div className="row">
          <div className="col-lg-9 col-md-9 all-player-area">
            <h1><FontAwesomeIcon icon={faUsers} /> Select players from <span className="badge bg-primary text-white"> ({players.length}) </span>  players  </h1>
            <div className="row">
              {
                players.map(player => <Players player={player} passingFunction={addPlayer} key={player.id}></Players>)
              }
              
            </div>
          </div>

          
          <SelectedPlayers selectedPlayers={filterPlayer}></SelectedPlayers>
        </div>
      </section>
   
  );
}

export default App;
