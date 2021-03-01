
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
    if(preventDuplicate(filterPlayer,clickedPlayer.id)==true){
      const adding=[...filterPlayer,clickedPlayer];
      setFilterPlayer(adding);
    }else{
      alert('This player already in the list!');
    }    
  }
  //console.log(filterPlayer);

  
  //Preventing Duplicate Player adding
  function preventDuplicate(theArray,newData){
    if(theArray.length<=0){
      return true;
    }else{
      let result=1;
      for (let i = 0; i < theArray.length; i++) {
        const singleData = theArray[i].id;
        if(singleData==newData){
          return result=0;
        }
      }
      if(result==1){
        return true;
      }else{
        return false;
      }
    }
  }


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
