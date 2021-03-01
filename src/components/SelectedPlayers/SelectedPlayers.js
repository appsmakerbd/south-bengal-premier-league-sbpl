import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import './SelectedPlayers.css';

const SelectedPlayers = (props) => {
    const allSelected=props.selectedPlayers;
    //Getting total Slart using reduce
    const totalExpense=allSelected.reduce((sum,addValue)=>sum+addValue.auction_money,0);
    console.log(props.selectedPlayers);

    return (
        <div className="col-lg-3 col-md-3 selected-players" >
            <h1>Player Selected <span className="badge bg-primary text-white">{props.selectedPlayers.length}</span></h1>
            <ul>
                {
                    allSelected.map(singlePlayer=><li><FontAwesomeIcon className="text-primary" icon={faCheck} /> {singlePlayer.name}  </li>)
                }
            </ul>
            <h3>Total Salary: BDT {totalExpense}</h3>
          </div>
    );
};

export default SelectedPlayers;